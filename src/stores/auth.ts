import { ref, onMounted, onUnmounted } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  name: string;
  surname: string;
  email: string;
  password?: string;
  api_token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref<any>({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref<boolean>(!!JwtService.getToken());
  let tokenExpirationTimer: number | null = null;

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(authUser.api_token);
    setTokenExpirationTimer();
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = {};
    JwtService.destroyToken();
    clearTokenExpirationTimer();
  }

  async function login(credentials: User) {
    try {
      const { data } = await ApiService.post("auth/login", credentials);
      if (data.token) {
        setAuth({ ...data, api_token: data.token });
      } else {
        setError({ message: "Token not found in response" });
      }
    } catch (error: any) {
      setError(error.response?.data || { message: "Login failed" });
    }
  }

  function logout() {
    purgeAuth();
  }

  async function register(credentials: User) {
    try {
      const { data } = await ApiService.post("register", credentials);
      setAuth(data);
    } catch (error: any) {
      setError(error.response?.data.errors || { message: "Registration failed" });
    }
  }

  async function forgotPassword(email: string) {
    try {
      await ApiService.post("forgot_password", { email });
      setError({});
    } catch (error: any) {
      setError(error.response?.data.errors || { message: "Password reset failed" });
    }
  }

  async function verifyAuth(): Promise<boolean> {
    const token = JwtService.getToken();
    if (!token) {
      purgeAuth();
      return false;
    }

    if (JwtService.isTokenExpired(token)) {
      console.log("Token is expired. Attempting to refresh...");
      return await refreshToken();
    }

    try {
      const payload = JwtService.decodeToken(token);
      if (payload) {
        isAuthenticated.value = true;
        return true;
      } else {
        purgeAuth();
        return false;
      }
    } catch (error) {
      console.error("Invalid token:", error);
      purgeAuth();
      return false;
    }
  }

  async function refreshToken(): Promise<boolean> {
    const token = JwtService.getToken();
    if (!token) {
      purgeAuth();
      setError({ message: "No token available to refresh" });
      return false;
    }

    try {
      console.log("Attempting to refresh token...");
      const { data } = await ApiService.post("auth/refresh-token");
      if (data.success) {
        console.log("Token refreshed successfully:", data.refreshToken);
        JwtService.saveToken(data.refreshToken);
        ApiService.setHeader();
        isAuthenticated.value = true;
        setTokenExpirationTimer();
        return true;
      } else {
        purgeAuth();
        setError({ message: "Refresh token failed: no token returned" });
        return false;
      }
    } catch (error) {
      console.error("Unable to refresh token:", error);
      purgeAuth();
      setError({ message: "Unable to refresh token" });
      return false;
    }
  }

  function setTokenExpirationTimer() {
    clearTokenExpirationTimer();
    const token = JwtService.getToken();
    if (!token) return;

    const tokenPayload = JwtService.decodeToken(token);
    const expirationTime = tokenPayload.exp * 1000 - Date.now();
    const timerDuration = Math.max(expirationTime - 2 * 60 * 1000, 0); // 58 minutes

    if (timerDuration > 0) {
      tokenExpirationTimer = window.setTimeout(() => {
        handleTokenExpiration();
      }, timerDuration);
    }
  }

  function clearTokenExpirationTimer() {
    if (tokenExpirationTimer) {
      clearTimeout(tokenExpirationTimer);
      tokenExpirationTimer = null;
    }
  }

  function handleTokenExpiration() {
    const token = JwtService.getToken();
    if (token && JwtService.isTokenExpired(token)) {
      console.log("Token is expired. Redirecting to sign-in...");
      purgeAuth();
      window.location.href = "/sign-in"; // Redirect to sign-in page
    } else {
      refreshToken();
    }
  }

  onMounted(() => {
    setTokenExpirationTimer();
  });

  onUnmounted(() => {
    clearTokenExpirationTimer();
  });

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
    refreshToken,
  };
});
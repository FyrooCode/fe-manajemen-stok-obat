import type { App } from "vue";
import type { AxiosResponse } from "axios";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/JwtService";
import { useAuthStore } from "@/stores/auth";

class ApiService {
  public static vueInstance: App;

  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL =
      import.meta.env.VITE_APP_API_URL;

    ApiService.vueInstance.axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const authStore = useAuthStore();

        if (error.response && error.response.status === 401) {
          if (!error.config.__isRetryRequest) {
            error.config.__isRetryRequest = true;
            const token = JwtService.getToken();
            if (token) {
              try {
                console.log("Attempting to refresh token...");
                const { data } = await axios.post(
                  `${import.meta.env.VITE_APP_API_URL}/auth/refresh-token`,
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );

                if (data.success) {
                  console.log("Token refreshed successfully:", data.refreshToken);
                  JwtService.saveToken(data.refreshToken);
                  ApiService.setHeader();

                  error.config.headers.Authorization = `Bearer ${data.refreshToken}`;
                  return ApiService.vueInstance.axios.request(error.config);
                } else {
                  console.error("Token refresh failed:", data.error);
                  authStore.logout();
                  return Promise.reject(new Error(data.error));
                }
              } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);
                authStore.logout();
                return Promise.reject(refreshError);
              }
            } else {
              console.log("No token available. Redirecting to login.");
              authStore.logout();
              return Promise.reject(error);
            }
          } else {
            console.log("Refresh token failed, no more retries.");
            authStore.logout();
            return Promise.reject(error);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  public static setHeader(): void {
    const token = JwtService.getToken();
    console.log("Setting token in header:", token);
    ApiService.vueInstance.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
    ApiService.vueInstance.axios.defaults.headers.common["Accept"] =
      "application/json";
  }

  public static async checkAndRefreshToken(): Promise<void> {
    const token = JwtService.getToken();
    if (token && JwtService.isTokenExpired(token)) {
      console.log("Token is expired. Attempting to refresh...");
      const authStore = useAuthStore();
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_APP_API_URL}/auth/refresh-token`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.success) {
          console.log("Token refreshed successfully:", data.refreshToken);
          JwtService.saveToken(data.refreshToken);
          ApiService.setHeader();
        } else {
          console.error("Token refresh failed:", data.error);
          authStore.logout();
          throw new Error(data.error);
        }
      } catch (error) {
        console.error("Token refresh failed:", error);
        authStore.logout();
        throw error;
      }
    }
  }

  public static async query(resource: string, params: any): Promise<AxiosResponse> {
    await ApiService.checkAndRefreshToken();
    return ApiService.vueInstance.axios.get(resource, { params });
  }

  public static async get(resource: string, slug = "" as string): Promise<AxiosResponse> {
    await ApiService.checkAndRefreshToken();
    return ApiService.vueInstance.axios.get(`${resource}/${slug}`);
  }

  public static async post(resource: string, params: any): Promise<AxiosResponse> {
    await ApiService.checkAndRefreshToken();
    return ApiService.vueInstance.axios.post(`${resource}`, params);
  }

  public static async update(
    resource: string,
    slug: string,
    params: any
  ): Promise<AxiosResponse> {
    await ApiService.checkAndRefreshToken();
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params);
  }

  public static async put(resource: string, params: any): Promise<AxiosResponse> {
    await ApiService.checkAndRefreshToken();
    return ApiService.vueInstance.axios.put(`${resource}`, params);
  }

  public static async delete(resource: string): Promise<AxiosResponse> {
    await ApiService.checkAndRefreshToken();
    return ApiService.vueInstance.axios.delete(resource);
  }

  public static async getObat(): Promise<AxiosResponse> {
    await ApiService.checkAndRefreshToken();
    return ApiService.vueInstance.axios.get("/obat");
  }
}

export default ApiService;
const ID_TOKEN_KEY = "id_token";

export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const decodeToken = (token: string): any => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded) {
    return true;
  }
  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp < currentTime;
};

export default { getToken, saveToken, destroyToken, decodeToken, isTokenExpired };
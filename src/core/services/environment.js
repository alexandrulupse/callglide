import { BASE_URL_MAP, API_BASE_URL_MAP, LOCAL } from "../constants";

export const getEnvironment = () => BASE_URL_MAP[window.location.host] || LOCAL;
export const getApiBaseURL = () => API_BASE_URL_MAP[getEnvironment()];

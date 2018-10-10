import { http } from "../../core/services/http";
import { getAuthToken } from "../services/auth";

/* eslint-disable no-param-reassign */
const requestInterceptor = config => {
  const authToken = getAuthToken();

  if (authToken) {
    config.headers.Authorization = authToken;
  }

  return config;
};
/* eslint-enable no-param-reassign */

const requestErrorInterceptor = error => Promise.reject(error);

const registerAuthInterceptor = () => {
  http.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
};

export default registerAuthInterceptor;

import axios from "axios";
import humps from "humps";
import { isPlainObject, isArray } from "lodash-es";
import { getApiBaseURL } from "./environment";

const transformResponse = data =>
  isPlainObject(data) || isArray(data) ? humps.camelizeKeys(data) : data;

const defaultHttpSettings = {
  responseType: "json",
  transformResponse: axios.defaults.transformResponse.concat(transformResponse)
};

export const http = axios.create({
  ...defaultHttpSettings,
  baseURL: `${getApiBaseURL()}/`
});

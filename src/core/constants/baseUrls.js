import { LOCAL, DEVELOPMENT } from "./environments";

export const BASE_URL_MAP = {
  "callglide.portal.com": DEVELOPMENT
};

export const API_BASE_URL_MAP = {
  [DEVELOPMENT]: "https://clgadmin01-developer-edition.eu9.force.com/services",
  [LOCAL]: "https://clgadmin01-developer-edition.eu9.force.com/services"
};

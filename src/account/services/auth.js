import { http } from "../../core/services/http";
import { createSession, getSessionValue, destroySession } from "./session";

export const login = async (email, password) => {
  const response = await http.post("apexrest/cglcustomer01", {
    verb: "auth",
    email,
    password
  });
  createSession(response.headers.authorization, response.data);
  return response.data;
};

export const getAuthToken = () => getSessionValue("authToken");
export const getUser = () => getSessionValue("user");

export const logout = () => {
  destroySession();
};

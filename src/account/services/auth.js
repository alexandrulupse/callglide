import { http } from "../../core/services/http";
import { createSession, getSessionValue, destroySession } from "./session";

export const login = async (userName, password) => {
  const response = await http.post("apexrest/cglcustomer01", {
    verb: "auth",
    userName,
    password
  });
  console.log("response.data={0}", response.data)
  createSession(response.headers.authorization, response.data);
  return response.data;
};

export const getAuthToken = () => getSessionValue("authToken");
export const getUser = () => getSessionValue("user");

export const logout = () => {
  destroySession();
};

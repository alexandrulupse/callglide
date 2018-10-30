import { http } from "../../core/services/http";

export const requestPasswordReset = userName =>
  http.post("apexrest/cglcustomer01", {
    verb: "resetPassword",
    userName
  });

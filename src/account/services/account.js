import { http } from "../../core/services/http";

export const requestPasswordReset = email =>
  http.post("apexrest/cglcustomer01", {
    verb: "resetPassword",
    email
  });

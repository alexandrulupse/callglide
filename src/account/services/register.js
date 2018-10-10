import { http } from "../../core/services/http";

const register = data =>
  http.post("apexrest/cglcustomer01", {
    verb: "register",
    data
  });
export default register;

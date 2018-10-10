import { combineReducers } from "redux";
import { reducer as loginReducer } from "./login";
import { reducer as requestPasswordResetReducer } from "./requestPasswordReset";
import { reducer as registerReducer } from "./register";

export { login, resetLogin } from "./login";
export { register, resetRegister } from "./register";
export {
  requestPasswordReset,
  resetRequestPasswordReset
} from "./requestPasswordReset";

export const reducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  requestPasswordReset: requestPasswordResetReducer
});

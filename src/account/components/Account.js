import React from "react";
import { Switch } from "react-router";
import GuestRoute from "./GuestRoute";
import { LoginPage, RequestPasswordResetPage, RegisterPage } from "./pages";

const Account = () => (
  <Switch>
    <GuestRoute exact path="/account/login" component={LoginPage} />
    <GuestRoute exact path="/account/register" component={RegisterPage} />
    <GuestRoute
      exact
      path="/account/forgot-password"
      component={RequestPasswordResetPage}
    />
  </Switch>
);

export default Account;

import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { ButtonSet, Button, Panel } from "../../../core/components/styled";
import { Input } from "../../../core/components";
import {
  AccountPanelError,
  AccountPanelLink,
  AccountPanelLogo,
  AccountPanelTitle
} from "../styled";
import { isRequired } from "../../../utils/services/validator";
import focusFirstInvalidField from "../../../utils/services/focusFirstInvalidField";

const LoginForm = ({ isLoginFailed, handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <AccountPanelLogo />
    <AccountPanelTitle>Log in to Callglide</AccountPanelTitle>
    <Panel fluid padding="small">
      <Field
        name="email"
        component={Input}
        label="Email"
        type="text"
        validate={[isRequired]}
      />
      <Field
        name="password"
        component={Input}
        label="Password"
        type="password"
        validate={[isRequired]}
      />

      {isLoginFailed && (
        <AccountPanelError>Invalid login credentials</AccountPanelError>
      )}

      <AccountPanelLink to="/account/forgot-password">
        Forgot your password?
      </AccountPanelLink>

      <ButtonSet margin="medium">
        <Button color="primary" type="submit">
          Login
        </Button>
      </ButtonSet>
      <AccountPanelLink to="/account/register">
        Not yet a user? Register here!
      </AccountPanelLink>
    </Panel>
  </form>
);

LoginForm.propTypes = {
  isLoginFailed: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login",
  onSubmitFail: focusFirstInvalidField
})(LoginForm);

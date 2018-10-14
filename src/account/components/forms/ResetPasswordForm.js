import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Button, Input, Header } from "semantic-ui-react";
import { isRequired } from "../../../utils/services/validator";
import focusFirstInvalidField from "../../../utils/services/focusFirstInvalidField";

const matchPassword = (value, allValues) =>
  value === allValues.password ? undefined : "Must match the password.";

const ResetPasswordForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <Header>Reset your password</Header>

    <Field
      name="password"
      component={Input}
      label="Password"
      type="password"
      validate={[isRequired]}
    />

    <Field
      name="passwordConfirmation"
      component={Input}
      label="Password confirmation"
      type="password"
      validate={[isRequired, matchPassword]}
    />

    <Button type="submit">Reset password</Button>
  </form>
);

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "resetPassword",
  onSubmitFail: focusFirstInvalidField
})(ResetPasswordForm);

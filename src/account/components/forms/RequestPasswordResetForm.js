import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Button, Input, Header, Message } from "semantic-ui-react";
import { isRequired } from "../../../utils/services/validator";
import focusFirstInvalidField from "../../../utils/services/focusFirstInvalidField";

const RequestPasswordResetForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <Header>Forgot your password?</Header>
    <Message>
      Enter your email address and we’ll send you instructions to reset your
      password
    </Message>

    <Field
      name="email"
      component={Input}
      label="Email"
      type="text"
      validate={[isRequired]}
    />

    <Button type="submit">Send</Button>
  </form>
);

RequestPasswordResetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "requestPasswordReset",
  onSubmitFail: focusFirstInvalidField
})(RequestPasswordResetForm);

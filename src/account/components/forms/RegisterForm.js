import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { ButtonSet, Button, Panel } from "../../../core/components/styled";
import { Input, Checkbox } from "../../../core/components";
import {
  AccountPanelLogo,
  AccountPanelTitle,
  AccountPanelLink
} from "../styled";
import { isRequired, isPhone } from "../../../utils/services/validator";
import focusFirstInvalidField from "../../../utils/services/focusFirstInvalidField";

const RegisterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <AccountPanelLogo />
    <AccountPanelTitle>Register to Callglide</AccountPanelTitle>
    <Panel fluid padding="small">
      <Field
        name="firstName"
        component={Input}
        label="First Name"
        type="text"
        validate={[isRequired]}
      />
      <Field
        name="lastName"
        component={Input}
        label="Last Name"
        type="text"
        validate={[isRequired]}
      />
      <Field
        name="userName"
        component={Input}
        label="User Name"
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
      <Field
        name="email"
        component={Input}
        label="Email"
        type="text"
        validate={[isRequired]}
      />

      <Field
        name="phone"
        component={Input}
        label="Telephone Number"
        type="text"
        validate={[isRequired]}
      />

      <Field
        name="companyName"
        component={Input}
        label="Company Name"
        type="text"
        validate={[isRequired, isPhone]}
      />

      <AccountPanelLink to="/account/terms-and-conditions">
        View Terms and Conditions
      </AccountPanelLink>

      <Field
        name="termsAndConditions"
        component={Checkbox}
        label="I agree to the Terms and Conditions"
        validate={[isRequired]}
      />

      <ButtonSet margin="medium">
        <Button color="primary" type="submit">
          Register
        </Button>
      </ButtonSet>
    </Panel>
  </form>
);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "register",
  onSubmitFail: focusFirstInvalidField
})(RegisterForm);

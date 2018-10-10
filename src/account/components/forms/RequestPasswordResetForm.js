import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { ButtonSet, Button } from '../../../core/components/styled';
import { Input } from '../../../core/components';
import { AccountPanelLogo, AccountPanelTitle, AccountPanelDescription } from '../styled';
import { isRequired } from '../../../utils/services/validator';
import focusFirstInvalidField from '../../../utils/services/focusFirstInvalidField';

const RequestPasswordResetForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <AccountPanelLogo />
    <AccountPanelTitle>Forgot your password?</AccountPanelTitle>
    <AccountPanelDescription>
      Enter your email address and we’ll send you instructions to reset your password
    </AccountPanelDescription>

    <Field name="email" component={Input} label="Email" type="text" validate={[isRequired]} />

    <ButtonSet>
      <Button type="submit">Send</Button>
    </ButtonSet>
  </form>
);

RequestPasswordResetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'requestPasswordReset',
  onSubmitFail: focusFirstInvalidField,
})(RequestPasswordResetForm);

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { ButtonSet, Button } from '../../../core/components/styled';
import { Input } from '../../../core/components';
import { AccountPanelLogo, AccountPanelTitle } from '../styled';
import { isRequired } from '../../../utils/services/validator';
import focusFirstInvalidField from '../../../utils/services/focusFirstInvalidField';

const matchPassword = (value, allValues) => (value === allValues.password ? undefined : 'Must match the password.');

const ResetPasswordForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <AccountPanelLogo />
    <AccountPanelTitle>Reset your password</AccountPanelTitle>

    <Field name="password" component={Input} label="Password" type="password" validate={[isRequired]} />

    <Field
      name="passwordConfirmation"
      component={Input}
      label="Password confirmation"
      type="password"
      validate={[isRequired, matchPassword]}
    />

    <ButtonSet>
      <Button type="submit">Reset password</Button>
    </ButtonSet>
  </form>
);

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'resetPassword',
  onSubmitFail: focusFirstInvalidField,
})(ResetPasswordForm);

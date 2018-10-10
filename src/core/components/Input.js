import React from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import { FormGroup, FormLabel, FormError, Input as FormInput } from './styled';

const Input = ({
  input,
  meta: { asyncValidating, submitFailed, error },
  placeholder,
  label,
  disabled,
  isLoading,
  margin,
  ...props
}) => (
  <FormGroup hasValue={input.value} isLoading={isLoading || asyncValidating} margin={margin}>
    {!!label && <FormLabel>{label}</FormLabel>}
    <FormInput {...input} placeholder={placeholder} disabled={disabled} {...props} />

    {submitFailed && error && <FormError>{error}</FormError>}
  </FormGroup>
);

Input.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  margin: PropTypes.string,
};

Input.defaultProps = {
  isLoading: false,
  placeholder: undefined,
  label: undefined,
  disabled: false,
  margin: undefined,
};

export default Input;

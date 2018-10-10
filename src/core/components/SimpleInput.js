import React from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import { FormGroup, FormError, SimpleInput as SimpleFormInput } from './styled';

const SimpleInput = ({
  input,
  meta: { asyncValidating, submitFailed, error },
  disabled,
  isLoading,
  size,
  margin,
  ...props
}) => (
  <FormGroup isLoading={isLoading || asyncValidating} margin={margin}>
    <SimpleFormInput {...input} {...props} disabled={disabled} size={size} />

    {submitFailed && error && <FormError>{error}</FormError>}
  </FormGroup>
);

SimpleInput.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  size: PropTypes.string,
  margin: PropTypes.string,
};

SimpleInput.defaultProps = {
  isLoading: false,
  disabled: false,
  size: undefined,
  margin: undefined,
};

export default SimpleInput;

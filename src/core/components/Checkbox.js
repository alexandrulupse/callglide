import React from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes } from 'redux-form';
import { Checkbox as CheckboxContainer, CheckboxCheck, CheckboxInput, CheckboxText } from './styled';

const Checkbox = ({ input, label, disabled, block, size, margin }) => (
  <CheckboxContainer isDisabled={disabled} block={block} size={size} margin={margin}>
    <CheckboxInput {...input} type="checkbox" disabled={disabled} checked={input.value} />
    <CheckboxCheck />
    <CheckboxText>{label}</CheckboxText>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.string,
  margin: PropTypes.string,
};

Checkbox.defaultProps = {
  disabled: false,
  block: false,
  size: undefined,
  margin: undefined,
};

export default Checkbox;

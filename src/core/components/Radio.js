import React from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes } from 'redux-form';
import { Radio as RadioContainer, RadioInput, RadioCheck, RadioText } from './styled';

const Radio = ({ input, label, size, block, margin, disabled }) => (
  <RadioContainer isDisabled={disabled} block={block} size={size} margin={margin}>
    <RadioInput {...input} type="radio" disabled={disabled} />
    <RadioCheck />
    <RadioText>{label}</RadioText>
  </RadioContainer>
);

Radio.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.string,
  margin: PropTypes.string,
};

Radio.defaultProps = {
  disabled: undefined,
  block: false,
  size: undefined,
  margin: undefined,
};

export default Radio;

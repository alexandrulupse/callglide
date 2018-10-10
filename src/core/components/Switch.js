import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes } from 'redux-form';
import { Switch as SwitchContainer, SwitchBar, SwitchHandle, SwitchText } from './styled';

class Switch extends PureComponent {
  toggle = () => {
    const { input } = this.props;
    input.onChange(!input.value);
  };

  render() {
    const { input: { value }, label, disabled, margin } = this.props;
    return (
      <SwitchContainer isDisabled={disabled} isActive={value} margin={margin}>
        <SwitchBar onClick={this.toggle}>
          <SwitchHandle />
        </SwitchBar>
        <SwitchText>{label}</SwitchText>
      </SwitchContainer>
    );
  }
}

Switch.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
};

Switch.defaultProps = {
  disabled: false,
  margin: undefined,
};

export default Switch;

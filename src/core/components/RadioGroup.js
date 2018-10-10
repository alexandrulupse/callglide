import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes, Field } from 'redux-form';
import { FormGroup } from './styled';
import Radio from './Radio';

class RadioGroup extends PureComponent {
  onChange = (event, value) => {
    this.props.input.onChange(value);
  };

  render() {
    const { input: { name }, items, margin } = this.props;
    return (
      <FormGroup margin={margin}>
        {items.map(item => (
          <Field
            name={name}
            component={Radio}
            type="radio"
            label={item.label}
            value={item.value}
            key={item.value}
            onChange={this.onChange}
          />
        ))}
      </FormGroup>
    );
  }
}

RadioGroup.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  items: PropTypes.array.isRequired,
  margin: PropTypes.string,
};

RadioGroup.defaultProps = {
  margin: undefined,
};

export default RadioGroup;

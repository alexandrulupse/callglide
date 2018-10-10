import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePickerInput from 'react-day-picker/DayPickerInput';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import {
  FormGroup,
  FormGroupClearContainer,
  FormGroupClear,
  FormLabel,
  FormError,
  DatePicker as DatePickerContainer,
} from './styled';

class DatePicker extends PureComponent {
  onDayChange = date => {
    this.props.input.onChange(moment(date).format('MM/DD/YYYY'));
  };

  clearInput = () => this.props.input.onChange(null);

  parseDate = (str, format) => {
    const date = moment(str, format, true);
    return date.isValid() ? date.toDate() : undefined;
  };

  formatDate = (str, format) => moment(str).format(format);

  render() {
    const {
      input: { value },
      meta: { submitFailed, error },
      label,
      placeholder,
      disabled,
      disabledDays,
      isClearable,
      margin,
      ...props
    } = this.props;
    return (
      <FormGroup hasValue={value} margin={margin}>
        {!!label && <FormLabel>{label}</FormLabel>}

        {isClearable &&
          !!value && (
            <FormGroupClearContainer isDisabled={disabled}>
              <FormGroupClear disabled={disabled} onClick={this.clearInput} />
            </FormGroupClearContainer>
          )}

        <DatePickerContainer>
          <DatePickerInput
            format="MM/DD/YYYY"
            onDayChange={this.onDayChange}
            parseDate={this.parseDate}
            formatDate={this.formatDate}
            value={value}
            placeholder={placeholder || ''}
            inputProps={{ disabled, readOnly: true }}
            dayPickerProps={{
              disabledDays,
            }}
            {...props}
          />
        </DatePickerContainer>

        {submitFailed && error && <FormError>{error}</FormError>}
      </FormGroup>
    );
  }
}

DatePicker.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  disabledDays: PropTypes.array,
  isClearable: PropTypes.bool,
  margin: PropTypes.string,
};

DatePicker.defaultProps = {
  label: undefined,
  placeholder: undefined,
  disabled: false,
  isClearable: false,
  margin: undefined,
  disabledDays: undefined,
};

export default DatePicker;

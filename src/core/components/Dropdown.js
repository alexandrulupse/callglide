import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { has, reduce, find } from 'lodash-es';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import { transparentize } from 'polished';
import { theme } from '../../core/styles';
import { FormGroup, FormLabel, FormError } from './styled';

const getControlBackgroundImage = state => {
  if (state.isFocused) {
    return 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2U9IiMwMzk4OEEiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNMTIgMUw2LjMzMyA2IDEgMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+")';
  }

  if (state.isDisabled) {
    return 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2U9IiM5Njk2OTYiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNMTIgMUw2LjMzMyA2IDEgMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+")';
  }

  return 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2U9IiMwMzk4OEEiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNMTIgMUw2LjMzMyA2IDEgMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utb3BhY2l0eT0iLjcwNCIvPjwvc3ZnPg==")';
};

export const dropdownStyles = {
  container: () => ({}),
  control: (baseStyle, state) => ({
    width: '100%',
    paddingRight: '26px',
    position: 'relative',
    background: 'right 2px center no-repeat',
    backgroundImage: getControlBackgroundImage(state),
    outline: 'none',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: state.isFocused ? theme.brandPrimary : theme.grayLight,
    lineHeight: '22px',
    fontSize: '14px',
    color: theme.grayBase,
  }),
  valueContainer: baseStyle => ({ ...baseStyle, padding: '0px 6px 2px 0' }),
  singleValue: baseStyle => ({ ...baseStyle, top: '3px', transform: 'none' }),
  placeholder: baseStyle => ({
    ...baseStyle,
    top: '3px',
    transform: 'none',
    textTransform: 'capitalize',
    color: theme.grayDark,
  }),
  indicatorsContainer: () => ({ position: 'absolute', top: '4px', right: '22px' }),
  dropdownIndicator: () => ({ display: 'none' }),
  clearIndicator: (baseStyle, state) => ({
    '::after': {
      display: 'inline-block',
      width: '10px',
      height: '10px',
      content: '""',
      backgroundColor: state.isDisabled ? theme.grayDark : theme.brandPrimary,
      backgroundImage:
        'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjkxOC45TDUuMS4wODJhLjI2NC4yNjQgMCAwIDAtLjM4MiAwTDMgMS44IDEuMjgyLjA4MmEuMjY0LjI2NCAwIDAgMC0uMzgyIDBMLjA4Mi45YS4yNjQuMjY0IDAgMCAwIDAgLjM4MkwxLjggMyAuMDgyIDQuNzE4YS4yNjQuMjY0IDAgMCAwIDAgLjM4MmwuODE4LjgxOGMuMTEuMTEuMjczLjExLjM4MiAwTDMgNC4ybDEuNzE4IDEuNzE4QS4yOTUuMjk1IDAgMCAwIDQuOTEgNmEuMjk1LjI5NSAwIDAgMCAuMTkxLS4wODJsLjgxOC0uODE4YS4yNjQuMjY0IDAgMCAwIDAtLjM4Mkw0LjIgM2wxLjcxOC0xLjcxOGEuMjY0LjI2NCAwIDAgMCAwLS4zODJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    '> svg': { display: 'none' },
  }),
  noOptionsMessage: baseStyles => ({
    ...baseStyles,
    textTransform: 'capitalize',
    lineHeight: '18px',
    fontSize: '12px',
  }),
  menu: baseStyle => ({
    ...baseStyle,
    left: 'initial',
    top: 'initial',
    zIndex: 3000,
    width: 'auto',
    minWidth: '100%',
    marginTop: 0,
    borderRadius: '2px',
    boxShadow: `0 4px 8px ${transparentize(0.9, theme.grayBase)}`,
  }),
  option: (baseStyle, state) => ({
    ...baseStyle,
    ':active': theme.grayLight,
    paddingRight: '30px',
    backgroundColor:
      (state.isSelected && transparentize(0.2, theme.brandPrimary)) ||
      (state.isFocused && theme.grayLight) ||
      'transparent',
    fontSize: '12px',
  }),
};

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { inputText: '' };
  }

  onInputChange = inputText => {
    this.setState({ inputText });
  };

  onChange = option => {
    const value = has(option, 'value') ? option.value : null;
    this.props.input.onChange(value);
  };

  findSelectedOption = value =>
    reduce(
      this.props.options,
      (selectedOption, option) => {
        if (selectedOption) return selectedOption;
        if (option.value === value) return option;
        return find(option.options, { value }) || '';
      },
      '',
    );

  render() {
    const {
      input: { value },
      meta: { submitFailed, error },
      placeholder,
      label,
      disabled,
      margin,
      components,
      ...props
    } = this.props;

    return (
      <FormGroup margin={margin} hasValue={value || this.state.inputText}>
        {!!label && <FormLabel>{label}</FormLabel>}
        <Select
          {...props}
          isDisabled={disabled}
          components={components}
          styles={dropdownStyles}
          placeholder={placeholder || ''}
          value={this.findSelectedOption(value)}
          onChange={this.onChange}
          onInputChange={this.onInputChange}
        />
        {submitFailed && error && <FormError>{error}</FormError>}
      </FormGroup>
    );
  }
}

Dropdown.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  margin: PropTypes.string,
  components: PropTypes.object,
};

Dropdown.defaultProps = {
  placeholder: undefined,
  label: undefined,
  disabled: false,
  margin: undefined,
  components: undefined,
};

export default Dropdown;

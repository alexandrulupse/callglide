/* global google */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import { indexOf, find, get } from 'lodash-es';
import { FormGroup, FormLabel, FormError, Input as FormInput } from './styled';

class LocationPicker extends Component {
  constructor(props) {
    super(props);
    const { input: { value, onChange } } = props;
    const text = value.formattedAddress || '';
    this.state = { value: text };
    onChange({ ...value, text });
  }

  componentDidMount() {
    const { input: { onChange } } = this.props;
    const autoComplete = new google.maps.places.Autocomplete(this.locationPickerRef);

    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      const location = this.getLocation(place);
      this.setState({ value: location.formattedAddress });
      onChange({ ...this.props.input.value, ...location, text: location.formattedAddress });
    });
  }

  onChange = event => {
    const { input: { onChange, value } } = this.props;
    const text = event.target.value;
    this.setState({ value: text });
    onChange({ ...value, text });
  };

  getLocation = place => ({
    latitude: place.geometry ? place.geometry.location.lat() : undefined,
    longitude: place.geometry ? place.geometry.location.lng() : undefined,
    streetNumber: this.getStreetNumber(place),
    street: this.getStreet(place),
    city: this.getCity(place),
    state: this.getState(place),
    country: this.getCountry(place),
    zip: this.getZip(place),
    formattedAddress: place.formatted_address,
  });

  getStreetNumber = place => this.getAddressComponent(place, 'street_number');
  getStreet = place => this.getAddressComponent(place, 'route');
  getCity = place =>
    this.getAddressComponent(place, 'locality') ||
    this.getAddressComponent(place, 'sublocality') ||
    this.getAddressComponent(place, 'neighborhood') ||
    this.getAddressComponent(place, 'administrative_area_level_3');

  getState = place => this.getAddressComponent(place, 'administrative_area_level_1');
  getCountry = place => this.getAddressComponent(place, 'country');
  getZip = place => this.getAddressComponent(place, 'postal_code');

  getAddressComponent = (place, type) => {
    const addressComponent = find(
      place.address_components,
      addressComponent => indexOf(addressComponent.types, type) > -1,
    );

    return get(addressComponent, 'short_name', '');
  };

  setLocationPickerRef = element => {
    this.locationPickerRef = element;
  };

  render() {
    const {
      meta: { active, asyncValidating, submitFailed, error },
      placeholder,
      label,
      disabled,
      isLoading,
      margin,
    } = this.props;

    const { value } = this.state;
    return (
      <FormGroup hasValue={value} isActive={active} isLoading={isLoading || asyncValidating} margin={margin}>
        {!!label && <FormLabel>{label}</FormLabel>}

        <FormInput
          type="text"
          placeholder={placeholder || ''}
          value={value}
          disabled={disabled}
          onChange={this.onChange}
          innerRef={this.setLocationPickerRef}
        />

        {submitFailed && error && <FormError>{error}</FormError>}
      </FormGroup>
    );
  }
}

LocationPicker.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  margin: PropTypes.string,
};

LocationPicker.defaultProps = {
  isLoading: false,
  placeholder: undefined,
  label: undefined,
  disabled: false,
  margin: undefined,
};

export default LocationPicker;

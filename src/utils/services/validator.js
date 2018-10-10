import validator from "validator";
import { has } from "lodash-es";

const phoneRegex = new RegExp(/^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/);

export const isRequired = value =>
  value ? undefined : "You can not leave this empty.";
export const isEmail = value =>
  validator.isEmail(value) ? undefined : "Please provide a valid email.";
export const isPhone = value =>
  phoneRegex.test(value) ? undefined : "Please provide a valid phone number.";
export const isFile = value =>
  value && value instanceof FileList && value.length
    ? undefined
    : "Please choose a file.";

export const hasCoordinates = value =>
  has(value, "latitude") && has(value, "longitude")
    ? undefined
    : "Please provide an address with coordinates.";

export const hasCountry = value =>
  has(value, "country")
    ? undefined
    : "Please provide an address with a country.";

export const hasCity = value =>
  has(value, "city") ? undefined : "Please provide an address with a city.";
export const hasStreet = value =>
  has(value, "street") ? undefined : "Please provide an address with a street.";

export const hasStreetNumber = value =>
  has(value, "streetNumber")
    ? undefined
    : "Please provide an address with a street number.";

export const hasZip = value =>
  has(value, "zip")
    ? undefined
    : "Please provide an address with a postal code.";

export const isUnchangedAddress = value =>
  value.text && value.formattedAddress === value.text
    ? undefined
    : "Please select an address from the list.";

const createFormattedAddress = address =>
  `${address.street} ${address.streetNumber}, ${address.city}, ${address.zip} ${address.state}, ${address.country}`;

export default createFormattedAddress;

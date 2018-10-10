const isFalsy = (value, { allowEmptyString = false, allowZero = false } = {}) => {
  if (value === '') return !allowEmptyString;
  if (value === 0) return !allowZero;
  return !value;
};

export default isFalsy;

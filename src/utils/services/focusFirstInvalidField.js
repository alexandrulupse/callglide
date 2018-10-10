import { keys, isPlainObject } from 'lodash-es';

const findFirstInvalidFieldName = (errors, path = '') => {
  const fieldNames = keys(errors);
  const nextPath = `${path}${path ? '.' : ''}${fieldNames[0]}`;
  return isPlainObject(errors[fieldNames[0]]) ? findFirstInvalidFieldName(errors[fieldNames[0]], nextPath) : nextPath;
};

const focusFirstInvalidField = errors => {
  const fieldName = errors && findFirstInvalidFieldName(errors);
  const field = fieldName && document.querySelector(`[name="${fieldName}"]`);
  if (field) field.focus();
};

export default focusFirstInvalidField;

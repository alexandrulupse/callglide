import React from "react";
import PropTypes from "prop-types";
import { fieldInputPropTypes, fieldMetaPropTypes } from "redux-form";
import { size } from "lodash-es";
import {
  FormGroup,
  FormError,
  FileInput as FileInputContainer,
  FileInputText,
  FileInputLabel,
  FileInputInput
} from "./styled";

const FileInput = ({
  input: { value, ...input },
  meta: { submitFailed, error },
  disabled,
  margin,
  ...props
}) => (
  <FormGroup margin={margin}>
    <FileInputContainer isEmpty={!value}>
      <FileInputLabel>
        <FileInputInput {...input} {...props} disabled={disabled} type="file" />{" "}
        Choose File
      </FileInputLabel>
      <FileInputText>
        {size(value) ? value[0].name : "No file chosen"}
      </FileInputText>
    </FileInputContainer>

    {submitFailed && error && <FormError>{error}</FormError>}
  </FormGroup>
);

FileInput.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  disabled: PropTypes.bool.isRequired,
  margin: PropTypes.string
};

FileInput.defaultProps = {
  disabled: false,
  margin: undefined
};

export default FileInput;

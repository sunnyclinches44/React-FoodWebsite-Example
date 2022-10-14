import { useState } from "react";

import {
  StyledFormInput,
  StyledLabel,
  StyledFormInputContainer
} from "./FormInput-styles";

const FormInput = (props) => {
  const [displayLabel, SetDisplayLabel] = useState(false);

  const VerifyInputValue = (e) => {
    if (e.target.value !== "") {
      SetDisplayLabel(true);
      props.onChange(e);
    } else {
      SetDisplayLabel(false);
    }
  };

  return (
    <StyledFormInputContainer>
      {(displayLabel || props.inputValue != null) && (
        <StyledLabel isError={props.isError}>
          {props.placeHolderInfo}
        </StyledLabel>
      )}
      <StyledFormInput
        type="text"
        placeholder={props.placeHolderInfo}
        readOnly={props.isReadOnly}
        onChange={VerifyInputValue}
        value={props.inputValue}
      />

      {props.errorMessages &&
        props.errorMessages.map((error) => {
          console.log(error);
          return (
            <StyledLabel key="{error.field}" isError={true}>
              {error.message}
            </StyledLabel>
          );
        })}
    </StyledFormInputContainer>
  );
};

export default FormInput;

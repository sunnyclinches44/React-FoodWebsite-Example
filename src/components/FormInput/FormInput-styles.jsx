import styled, { css } from "styled-components";

export const StyledFormInput = styled.input`
  width: 100%;
  height: 2em;
  padding: 1em;
`;

export const StyledLabel = styled.label`
  font-size: 0.8em;
  color: ${(props) => (props.isError ? "red" : "black")};
`;

export const StyledFormInputContainer = styled.div(() => {
  return css`
    display: grid;
    grid-auto-flow: row;
  `;
});

import styled, { css } from "styled-components";

export const StyledUploadImageContainer = styled.form(() => {
  return css`
    display: grid;
    grid-auto-flow: row;
    row-gap: 1.5em;
    margin: auto;
    margin-bottom: 1.5em;
    .styled-cancel-img {
      width: 1.5em;
      height: 1.5em;
    }
    .styled-upload-img {
      border: 1px dotted hsla(0, 0%, 0%, 1);
      padding: 2em 8.125em;
    }
    #UploadFileInput {
      display: none;
    }
  `;
});

export const StyledUploadMessage = styled.div((props) => {
  return css`
    background-color: ${(props) =>
      props.uploadmessagestatus === "error"
        ? "hsla(4, 90%, 58%, 0.8)"
        : "hsla(156, 100%, 50%, 0.8)"};
    padding: 0.5em;
  `;
});

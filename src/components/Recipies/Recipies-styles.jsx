import styled, { css } from "styled-components";

export const StyledRecipiesContainer = styled.div(() => {
  return css`
    display: grid;
    grid-auto-flow: row;
    row-gap: 1em;
    .Recipy-Header {
      display: flex;
      justify-content: space-between;
      padding: 4.375rem;
      background: linear-gradient(
        264.26deg,
        rgba(237, 125, 62, 0.270833) 12.96%,
        rgba(217, 217, 217, 0) 40.7%
      );
    }
    .Recipy-Card-Container {
      margin: 1em;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 1.5em;
    }
    @media screen and (max-width: 50em) {
      .Recipy-Card-Container {
        grid-template-columns: 1fr 1fr;
        column-gap: 1em;
      }
    }
    @media screen and (max-width: 32em) {
      .Recipy-Card-Container {
        grid-template-columns: 1fr;
        column-gap: 1em;
      }
      .Recipy-Header {
        padding: 1em;
      }
    }
  `;
});

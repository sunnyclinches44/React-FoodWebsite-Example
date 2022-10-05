import styled, { css } from "styled-components";

export const StyledProgressBarContainer = styled.div(() => {
  return css`
    height: 1.25em;
    width: 100%;
    background-color: hsl(60, 3%, 87%);
    border-radius: 3.125em;

    .span-style {
      font-weight: bold;
    }
  `;
});

export const StyledFillerContainer = styled.div((props) => {
  return css`
    height: 100%;
    width: ${props.completed}%;
    background-color: hsla(156, 100%, 50%, 0.8);
    border-radius: inherit;
    text-align: right;
  `;
});

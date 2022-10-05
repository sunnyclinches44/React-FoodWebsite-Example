import styled, { css } from "styled-components";

export const StyledFooter = styled.div(() => {
  return css`
    background-color: var(--clr-neutral-300);
    display: flex;
    justify-content: center;
    color: var(--clr-neutral-400);
    font-weight: var(--fw-400);
    font-size: var(--fs-footer-content);
    font-family: var(--ff-body);
    padding: 2rem;
  `;
});

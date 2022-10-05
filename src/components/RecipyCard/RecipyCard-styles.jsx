import styled, { css } from "styled-components";

export const StyledRecipyCard = styled.div(() => {
  return css`
    display: grid;
    grid-auto-flow: row;
    max-width: 18.75em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.5s;

    img {
      width: 100%;
      height: 9.5em;
      object-fit: cover;
    }
    .card-content {
      display: grid;
      grid-auto-flow: row;
      gap: 1.25em;
      padding: var(--padding);
    }

    :hover {
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
      transform: scale(1.1);
    }
  `;
});

export const StyledRecipyCardTitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: var(--fs-400);
  font-weight: var(--fw-600);
  line-height: 1em;
  img {
    width: 1.25em;
    height: 1.25em;
    object-fit: cover;
  }
`;

export const StyledRecipyCardDescription = styled.p`
  font-size: var(--fs-300);
  font-weight: var(--fw-300);
  line-height: 0.8125em;
`;

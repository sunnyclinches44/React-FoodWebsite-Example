import styled, { css } from "styled-components";

export const StyledCard = styled.div((props) => {
  return css`
    max-width: 20em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: transform 0.5s;
    img {
      width: 100%;
      height: 14em;
      object-fit: cover;
    }
    :hover {
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
      transform: scale(1.1);
    }
  `;
});

export const StyledCardContainer = styled.div(() => {
  return css`
    display: flex;
    justify-content: center;
  `;
});

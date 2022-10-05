import styled, { css } from "styled-components";

export const StyledHeroContainer = styled.div(() => {
  return css`
    display: grid;
    grid-auto-flow: column;
    gap: 1.4em;
    background: linear-gradient(
      261.12deg,
      #d9d9d9 -0.35%,
      rgba(237, 125, 62, 0.270833) -0.35%,
      rgba(230, 155, 113, 0.510417) -0.35%,
      rgba(226, 177, 150, 0.6875) 5.72%,
      rgba(241, 106, 30, 0.119792) 23.19%,
      rgba(244, 91, 4, 0) 56.76%
    );

    .Herocontainer-Left {
      padding: 2em;
    }

    h1 {
      font-size: var(--fs-primary-heading);
      font-weight: var(--fw-600);
      line-height: 2.34625em;
      margin-bottom: 1em;
    }
    h2 {
      font-size: var(--fs-secondary-heading);
      font-weight: var(--fw-600);
      line-height: 1.4375em;
      margin-bottom: 1em;
    }
    img {
      border-radius: 1.43em;
      height: 20em;
      margin: 2em;
    }
    /* if the screen width less than 800px or 50em 
then change to grid auto flow to row*/
    @media only screen and (max-width: 50em) {
      grid-auto-flow: row;
      img {
        margin: auto;
      }
    }
    /*if the screen width less than 500px or 32em 
      then change the following */
    @media only screen and (max-width: 32em) {
      .Herocontainer-Left {
        padding: 0em;
      }
      img {
        width: 100%;
      }
    }
  `;
});

export const StyledSecondaryContainer = styled.div(() => {
  return css`
    h2 {
      font-size: var(--fs-secondary-heading);
      font-weight: var(--fw-600);
      line-height: 1.4375em;
      text-align: center;
      margin: 1em;
    }
    .cards_section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: 4.3125em;
    }
    .card_link {
      text-decoration: none;
      color: black;
      width: 100%;
    }
    /* if the screen width less then 800px 05 50em
    then change to grid auto flow to row */
    @media only screen and (max-width: 50em) {
      .cards_section {
        grid-template-columns: 1fr;
        row-gap: 1em;
        place-items: center;
      }
      .card_link {
        width: 50%;
      }
    }
  `;
});

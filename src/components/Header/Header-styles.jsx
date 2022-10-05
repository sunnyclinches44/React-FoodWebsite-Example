import styled, { css } from "styled-components";

export const StyledHeader = styled.div(() => {
  return css`
    position: relative;
    display: flex;
    margin-top: 2em;
    justify-content: space-between;

    .navbar-logo {
      font-family: var(--ff-heading);
      font-size: var(--fs-primary-heading);
      font-weight: var(--fw-600);
      color: var(--clr-accent-400);
      margin-left: 1em;
    }
    .styled-header-img {
      display: none;
    }
    @media only screen and (max-width: 50em) {
      .styled-header-img {
        display: block;
        width: 2rem;
        height: 2rem;
      }
    }
    @media only screen and (max-width: 32em) {
      .navbar-logo {
        margin-left: 0em;
      }
    }
  `;
});

export const StyledNav = styled.nav`
  ul {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    a {
      font-family: var(--ff-heading);
      font-size: var(--fs-nav);
      font-weight: var(--fw-600);
      color: var(--clr-accent-400);
      text-decoration: none;
    }
  }
  /* if the screen width less than 800px or 50em 
then change to grid auto flow to row*/
  @media only screen and (max-width: 50em) {
    position: fixed;
    background: var(--clr-neutral-400);
    height: 100vh;
    width: 50%;
    ul {
      grid-auto-flow: row;
    }
    .styled-header-img {
      float: right;
    }
  }
`;

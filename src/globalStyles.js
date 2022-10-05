import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  /* color settings */
  /* primary orange color */
  --clr-primary-400: hsl(22, 74%, 54%);
  /* Black color */
  --clr-accent-400: hsl(0, 0%, 0%);
 /* White color */
  --clr-neutral-400: hsl(0, 0%, 100%);
  /* Grey color */
  --clr-neutral-300: hsl(0, 0%, 45%);

  /* font family settings */
  --ff-primary: "Work Sans";
  
  --ff-body: var(--ff-primary);
  --ff-heading: var(--ff-primary);
  
  /* font size settings */
  --fs-900: 2rem;
  --fs-700: 1.25rem;
  --fs-400: 1rem;
  --fs-300: 0.875rem;
  --fs-100: 0.75rem;

  --fs-button: var(--fs-300);
  --fs-nav: var(--fs-300);
  --fs-primary-heading: var(--fs-900);
  --fs-secondary-heading: var(--fs-700);
  --fs-footer-content: var(--fs-100);

  /* font weight settings */
  --fw-700: 700;
  --fw-600: 600;
  --fw-400: 400;
  --fw-300: 300;

/* Width related settings */
  --max-width: 1400px;
  --padding: 1em;

}
  
  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
  padding: 0;
  font: inherit;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html, 
body {
  height: 100%;
  font-family: var(--ff-body);
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture,
svg {
  display: block;
}


/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* General App styling */
body {
  max-width: min(var(--max-width), 100% - var(--padding)*2);
  margin: auto;
}
`;

export default GlobalStyle;

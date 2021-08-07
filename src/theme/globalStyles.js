import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
        --primary-font: "Rubik", Roboto, Helvetica, Arial, sans-serif;
        --radius-alpha: 0.5rem;
        --radius-beta: 1rem;
        --radius-gamma: 50%;
        --line-heigh-alpha: 1.5;
        --color-alpha: #1A1A1A;
        --color-beta: #2C2C2C;
        --color-gamma: #313131;
        --color-omega: #FFFFFF;
        --color-psi: #131313;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% !important;
    }

    body {
        font-family: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
        line-height: 1.5;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2;
    }

    a {
        color: white;
        text-decoration: none;
    }

    /* Loading */
    @keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: var(--clr-primary-5);
  animation: spinner 0.6s linear infinite;
}
`
 
export default GlobalStyle;
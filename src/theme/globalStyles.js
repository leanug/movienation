import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    :root {
        --primary-font: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --radius-alpha: 0.5rem;
        --radius-beta: 1rem;
        --radius-gamma: 50%;
        --color-alpha: #1A1A1A;
        --color-beta: #2C2C2C;
        --color-gamma: #313131;
        --color-omega: #FFFFFF;
        --color-psi: #000000;
        --line-heigh-alpha: 1.5;
        --max-width: 132rem;
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
        background-color: var(--color-psi);
        font-family: var(--primary-font);
        color: var(--color-omega);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2;
    }

    a {
        color: var(--color-omega);
        text-decoration: none;
    }

    /* Loading */
    @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
    }

    .loading {
        width: 5rem;
        height: 5rem;
        margin: 0 auto;
        margin-top: 10rem;
        border-radius: 50%;
        border: 3px solid var(--color-beta);
        border-top-color: var(--color-omega);
        animation: spinner 0.6s linear infinite;
    }
`
 
export default GlobalStyle;
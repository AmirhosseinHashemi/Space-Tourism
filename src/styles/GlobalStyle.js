import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        // Colors
        --clr-primary-1: #0B0D17;
        --clr-primary-2: #D0D6F9;
        --clr-white: #FFFFFF;

        // Typography
        --ff-barlow: "Barlow", sans-serif;
        --ff-barlow-condensed: "Barlow Condensed", sans-serif;
        --ff-bellefair: "Bellefair", serif;

        --fs-3xl: 15rem;
        --fs-2xl: 10rem;
        --fs-xl: 5.6rem;
        --fs-lg: 3.2rem;
        --fs-md: 2.8rem;
        --fs-sm: 1.6rem;
        --fs-xs: 1.4rem;

        --letter-spacing-lg: 0.475rem;
        --letter-spacing-md: 0.27rem;
        --letter-spacing-sm: 0.235rem;
    }

    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: var(--ff-barlow);
    }

    ul {
        list-style: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    
    button:focus-visible,
    a:link:focus-visible,
    a:visited:focus-visible {
        outline: 0.1rem solid var(--clr-white);
        outline-offset: 0.5rem;
    }

    img {
        width: 100%;
    }

    a:link,
    a:visited {
        color: inherit;
        text-decoration: none;
    }

    nav {
        font-family: var(--ff-barlow-condensed);
        font-size: var(--fs-sm);
        font-weight: 400;
        letter-spacing: var(--letter-spacing-md);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--ff-bellefair);
        font-weight: 400;
    }

    /* open nav menu class */
    .open {
        display: block;
        width: 25.4rem;
        animation-name: openMenu;
        animation-duration: 0.5s;
    }

    @keyframes openMenu {
        from {
            width: 0;
        }
        to {
            width: 25.4rem;
        }
    }

`;

export default GlobalStyle;

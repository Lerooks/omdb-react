import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body, html {
        font-family: 'Lato', sans-serif;
        height: 100%;
    }

    #root {
        height: 100%;

    }
`;

export default GlobalStyle;

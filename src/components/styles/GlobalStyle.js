import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap');

    :root {
        --white-color: #ffffff;
        --dark-color: #555555;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Syne Tactile', cursive;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components'
import background from "../images/background.jpg"

const GlobalStyle = createGlobalStyle`

body {
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
    font-family: "Lucida";
}

p {
    margin: 0;
}

h1, h2, h3 {
    padding-top: 1em;
    margin-top: 0;
}

`

export default GlobalStyle
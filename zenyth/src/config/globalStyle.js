import { createGlobalStyle } from 'styled-components'
import background from "../images/background.jpg";

const GlobalStyle = createGlobalStyle`

body {
    height: 100%;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
}


`

export default GlobalStyle
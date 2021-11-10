import { createGlobalStyle } from 'styled-components'
import background from "../images/background.jpg";

const GlobalStyle = createGlobalStyle`

body {
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
}


`

export default GlobalStyle
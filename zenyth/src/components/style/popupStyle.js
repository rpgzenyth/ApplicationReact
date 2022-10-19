import styled from "styled-components"
import background from "../../images/background.jpg"


export const FondPopUp = styled.div`
top: 0;
bottom: 0;
padding: 0;
margin: 0;
position: absolute;
z-index: 100;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ContainerPopUp = styled.div`
width: 70%;
padding: 6em 0;
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
border: solid 2px;
position: relative;
`
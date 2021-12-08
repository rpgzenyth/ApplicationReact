import styled from "styled-components"
import background from "../images/background.jpg";

export const StyledHeader = styled.header`
    width: 100%;
    text-align: center;
    background-color: #4D4D4D;
    border-bottom: 2px solid white;
    position: relative;
`

export const StyledFooter = styled.footer`
    width: 100%;
    text-align: center;
    background-color: #9D9C9D;
    border-top: 2px solid white;
    position: fixed;
    bottom 0;
    display: flex;
    justify-content: space-around;
    padding: 3px 0;
`


export const Titre = styled.p`
    font-family: "Metal Mania";
    color: white;
    font-size: 32px;
    padding: 0.2em 0;
    font-weight: normal;
    cursor: pointer;
`

export const HeaderImg = styled.img`
    max-width: 100%;
    padding-top: 5em;
    padding-bottom: 3em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 600px) {
        max-width: 30em;
        margin-top: 1em;
    }
`
export const Link = styled.p`
    background-color: #BFBFBF;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.3em;
    font-size: 24px;
    display: block;
    max-width: 8em;
    margin: auto;
    text-align: center;
    color: black;
    text-decoration: none;
    margin-bottom: 1em;
    font-family: "Metal Mania";
`
export const ImgLink = styled.img`
    max-width: 2em;
    padding: 0.5em;
`

export const FooterDiv = styled.div`
    display: flex;
    background: white;
    border-radius: 50%;
`


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


export const BlurBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #C4C4C480;
    z-index: -1;
`

export const FormCreatePerso = styled.form`
`

export const InputStyled = styled.input`
`

export const DivBackground = styled.div`
    background: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
`
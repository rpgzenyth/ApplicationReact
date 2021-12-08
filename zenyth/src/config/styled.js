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
export const BigBtn = styled.p`
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
export const ImgBigBtn = styled.img`
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

export const TitleForm = styled.h1`
    color: white;
    font-size: 1.2em;
    font-family: "Lucida";
`

export const SubtitleForm = styled.h2`
    color: white;
    font-size: 1.1em;
    font-family: "Lucida";
`

export const DivForm = styled.div`
    margin-bottom: 2em;
`

export const LabelForm = styled.h3`
    color: #9D9C9D;
    font-size: 1em;
    font-family: "Lucida";
    display: inline-block;
    width: 40%;
    margin-right: 5%;
`

export const Hr = styled.p`
    border-bottom: 1px solid #9D9C9D;
    margin-top: 2em;
    margin-bottom: 1em;
`

export const InputStyled = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    background: none;
    display: inline-block;
    width: 55%;
    color: white;
    outline: none;
    text-align: center;
`

export const TextareaStyled = styled.textarea`
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    background: none;
    display: inline-block;
    width: 55%;
    color: white;
    outline: none;
    text-align: center;
`

export const DivBackground = styled.div`
    background: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1em;
    padding-bottom: 4em;
`


export const Btn = styled.p`
    background-color: #50080A;
    border: 1px solid white;
    border-radius: 10px;
    padding: 0.3em;
    font-size: 20px;
    display: block;
    max-width: 7em;
    margin: auto;
    text-align: center;
    color: black;
    text-decoration: none;
    margin-bottom: 1em;
    font-family: "Metal Mania";
    color: white;
    letter-spacing: 1px;
`
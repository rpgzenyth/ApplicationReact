import styled from "styled-components"

const StyledHeader = styled.header`
    width: 100%;
    text-align: center;
    background-color: #4D4D4D;
    border-bottom: 2px solid white;
    position: relative;
`

const Titre = styled.p`
    font-family: "Metal Mania";
    color: white;
    font-size: 32px;
    padding: 0.2em 0;
    font-weight: normal;
`

const HeaderImg = styled.img`
    max-width: 100%;
    margin-top: 5em;
    margin-bottom: 3em;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const Link = styled.p`
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


export {StyledHeader, HeaderImg, Link, Titre}
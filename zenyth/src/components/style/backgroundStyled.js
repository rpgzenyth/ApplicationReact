import styled from "styled-components"

export const DivBackground = styled.div`
    background: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    padding-left: 1em;
    padding-right: 1em;
    min-height: 94vh;
    padding-top: 6vh;
`

export const DivBackgroundData = styled.div`
    background: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;    
    padding-left: 1em;
    padding-right: 1em;
    min-height: 94vh;
    padding-top: 6vh;
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

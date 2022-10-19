import styled from "styled-components"


export const StyledHeader = styled.header`
    width: 100%;
    text-align: center;
    background-color: #4D4D4D;
    border-bottom: 2px solid white;
    height: 6vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyleFooter = styled.footer`
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

export const FooterDiv = styled.div`
    display: flex;
    background: ${props => props.image};
    border-radius: 50%;
`

export const TempFooter = styled.footer`
    width: 100%;
    text-align: center;
    position: fixed;
    bottom 0;
    padding: 3px 0;
    background-color: #0d0f1e;
`

export const ContentDiv = styled.div`
    min-height: 94vh;
    padding-top: 6vh;
    padding-left: 1em;
    padding-right: 1em;
`
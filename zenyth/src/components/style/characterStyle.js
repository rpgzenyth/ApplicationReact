import styled from "styled-components"

export const PersoName = styled.h2`
    position: relative;
    color: white;
    margin: 0;
    font-size: 1.2em;
    padding: 0;
    padding-bottom: 0.5em;
`

export const ClassRace = styled.p`
    position: relative;
    color: white;
`

export const TextDataChara = styled.p`
    position: relative;
    color: grey;
`

export const DivDataChara = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DataCharaDiv = styled.div`
    max-height: 80vh;
    overflow: auto;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const DivPerso = styled.div`
    position: relative;
    margin-top: 1.5em;
    background: rgba(160, 28, 33, 0.8);
    border: 2px solid white;
    border-radius: 5px;
    text-align: center;
    padding: 0.4em;
    &:hover {
        background: rgba(160, 28, 33, 0.4);
    }
`

export const DivLegend = styled.div`
    position: relative;
    margin-top: 1em;
    margin-bottom: 2em;
`

export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

export const ListingImg = styled.div`
    height: auto;
    overflow: auto;
    scrollbar-width: none;
    display: flex;
    flex-wrap: wrap;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Item = styled.div`
    width: 50%;
`

export const ImgOverview = styled.img`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
`
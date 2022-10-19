import React from 'react';
import logo from '../../logo.png';
import { useHistory } from 'react-router';
import { ExportBigBtn, ExportHeaderImg, ExportContentDiv } from '../style/exportedStyle';

const Home = () => {
    const history = useHistory()

    return (
        <ExportContentDiv>
            <ExportHeaderImg src={logo}></ExportHeaderImg>
            <div>
                <ExportBigBtn onClick={ () => history.push(`/new-game`)}>Nouvelle Partie</ExportBigBtn>
                <ExportBigBtn onClick={ () => history.push(`/load-game`)}>Charger Parties</ExportBigBtn>
                <ExportBigBtn onClick={ () => history.push(`/listing-character`)}>Personnages</ExportBigBtn>
                <ExportBigBtn onClick={ () => history.push(`/parameters`)}>Paramètres</ExportBigBtn>
            </div>
        </ExportContentDiv>
    );
};

export default Home;
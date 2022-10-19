import React from 'react';
import logo from '../../logo.png';
import { useHistory } from 'react-router';
import { BigBtn, HeaderImg, ContentDiv } from '../style/exportedStyle';

const Home = () => {
    const history = useHistory()

    return (
        <ContentDiv>
            <HeaderImg src={logo}></HeaderImg>
            <div>
                <BigBtn onClick={ () => history.push(`/new-game`)}>Nouvelle Partie</BigBtn>
                <BigBtn onClick={ () => history.push(`/load-game`)}>Charger Parties</BigBtn>
                <BigBtn onClick={ () => history.push(`/listing-character`)}>Personnages</BigBtn>
                <BigBtn onClick={ () => history.push(`/parameters`)}>Paramètres</BigBtn>
            </div>
        </ContentDiv>
    );
};

export default Home;
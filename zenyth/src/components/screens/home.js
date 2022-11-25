import React from 'react';
import logo from '../../logo.png';
import { useNavigate } from 'react-router';
import { BigBtn, HeaderImg, ContentDiv } from '../style/exportedStyle';

const Home = () => {
    const history = useNavigate()

    return (
        <ContentDiv>
            <HeaderImg src={logo}></HeaderImg>
            <div>
                <BigBtn onClick={ () => history(`/new-game`)}>Nouvelle Partie</BigBtn>
                <BigBtn onClick={ () => history(`/load-game`)}>Charger Parties</BigBtn>
                <BigBtn onClick={ () => history(`/listing-character`)}>Personnages</BigBtn>
                <BigBtn onClick={ () => history(`/parameters`)}>Paramètres</BigBtn>
            </div>
        </ContentDiv>
    );
};

export default Home;
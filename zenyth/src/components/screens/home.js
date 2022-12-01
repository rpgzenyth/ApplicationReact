import React, { useEffect } from 'react';
import logo from '../../logo.png';
import { useNavigate } from 'react-router';
import { BigBtn, HeaderImg, ContentDiv } from '../style/exportedStyle';
import { getToken } from '../../utils/token';

const Home = () => {
    const history = useNavigate()

    useEffect(() =>{
        const token = getToken()
        if(!token){
            history('/login')
        }
    })

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
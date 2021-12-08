import React from 'react';
import {HeaderImg, BigBtn} from '../../config/styled'
import logo from '../../logo.png';
import { useHistory } from 'react-router';


const Home = () => {
    const history = useHistory()

    return (
        <div>
            <HeaderImg src={logo}></HeaderImg>
            <div>
                <BigBtn onClick={ () => history.push(`/new-game`)}>Nouvelle Partie</BigBtn>
                <BigBtn onClick={ () => history.push(`/load-game`)}>Charger Parties</BigBtn>
                <BigBtn onClick={ () => history.push(`/`)}>Personnages</BigBtn>
                <BigBtn onClick={ () => history.push(`/parameters`)}>Paramètres</BigBtn>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import {HeaderImg, LinkNewGame} from '../../config/styled'
import logo from '../../logo.png';

const Home = () => {

    return (
        <div>
            <HeaderImg src={logo}></HeaderImg>
            <LinkNewGame>Nouvelle Partie</LinkNewGame>
        </div>
    );
};

export default Home;
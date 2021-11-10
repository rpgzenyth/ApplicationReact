import React from 'react';
import {HeaderImg, Link} from '../../config/styled'
import logo from '../../logo.png';

const Home = () => {

    return (
        <div>
            <HeaderImg src={logo}></HeaderImg>
            <div>
                <Link href="#">Nouvelle Partie</Link>
                <Link href="#">Charger Parties</Link>
                <Link href="#">Paramètres</Link>
            </div>
        </div>
    );
};

export default Home;
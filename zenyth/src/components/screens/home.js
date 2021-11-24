import React from 'react';
import {HeaderImg, Link} from '../../config/styled'
import logo from '../../logo.png';
import { useHistory } from 'react-router';


const Home = () => {
    const history = useHistory()

    return (
        <div>
            <HeaderImg src={logo}></HeaderImg>
            <div>
                <Link onClick={ () => history.push(`/new-game`)}>Nouvelle Partie</Link>
                <Link onClick={ () => history.push(`/load-game`)}>Charger Parties</Link>
                <Link onClick={ () => history.push(`/parameters`)}>Paramètres</Link>
            </div>
        </div>
    );
};

export default Home;
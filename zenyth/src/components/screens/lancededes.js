import React from 'react';
import { useHistory } from 'react-router';
import {Buttonde, Buttondetwo} from '../../config/styled'


const Lancede = () => {
    const history = useHistory()

    return (
    <div>
        <h1><font color="white">Lancé de dés</font></h1>
        <div>
        <Buttonde onClick={ () => history.push(`/`)}>4</Buttonde>
        <Buttonde onClick={ () => history.push(`/`)}>6</Buttonde>
        <Buttonde onClick={ () => history.push(`/`)}>8</Buttonde>
        </div>
        <div>   
            <Buttondetwo onClick={ () => history.push(`/`)}>10</Buttondetwo>
            <Buttondetwo onClick={ () => history.push(`/`)}>12</Buttondetwo>
            <Buttondetwo onClick={ () => history.push(`/`)}>20</Buttondetwo>
            <Buttondetwo onClick={ () => history.push(`/`)}>100</Buttondetwo>
        </div>
    </div>
    );
};


export default Lancede;
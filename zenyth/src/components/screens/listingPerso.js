import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { DivBackground, DivLegend, TitleLegend, SubtitleLegend, DivPerso, PersoName, ClassRace, Listing } from '../../config/styled';
import {VscPersonAdd} from 'react-icons/vsc'

const ListingPerso = props => {
    const history = useHistory()

    const [results, setResults] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3131/api/v1/characters`,
        }).then(function (response) {
            setResults(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    },[])


    return (
        <DivBackground background = {props.background}>
            <DivLegend>
                <TitleLegend>Nom du personnage</TitleLegend>
                <SubtitleLegend>Classe / Race</SubtitleLegend>
                <VscPersonAdd onClick={ () => history.push(`/create-perso`)} size="35px" style= { {position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" , color: 'white' } }></VscPersonAdd>
            </DivLegend>

            {/* Boucle for */}
            <Listing>
                {
                    results.map((result) => (
                        <DivPerso key={result._id}>
                            <PersoName>{result.name}</PersoName>
                            <ClassRace>{result.class} / {result.race}</ClassRace>
                        </DivPerso>
                    ) )
                }
            </Listing>
            {/* end for */}

        </DivBackground>
    );
};

export default ListingPerso;
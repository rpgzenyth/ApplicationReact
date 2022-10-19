import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {VscPersonAdd} from 'react-icons/vsc'
import { ExportDivBackground, ExportPersoName, ExportClassRace, ExportDivPerso, ExportSubtitleLegend, ExportTitleLegend, ExportListing, ExportDivLegend, ExportLink } from '../style/exportedStyle';

const ListingCharacter = props => {
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
        <ExportDivBackground background = {props.background}>
            <ExportDivLegend>
                <ExportTitleLegend>Nom du personnage</ExportTitleLegend>
                <ExportSubtitleLegend>Classe / Race</ExportSubtitleLegend>
                <VscPersonAdd onClick={ () => history.push(`/create-character`)} size="35px" style= { {position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" , color: 'white' } }></VscPersonAdd>
            </ExportDivLegend>

            <ExportListing>
                {
                    results.map((result) => (
                        <ExportDivPerso key={result._id}>
                            <ExportLink onClick={ () => history.push(`/update-character/${result._id}`)}>
                                <ExportPersoName>{result.name}</ExportPersoName>
                                <ExportClassRace>{result.class} / {result.race}</ExportClassRace>
                            </ExportLink>
                        </ExportDivPerso>
                    ) )
                }
            </ExportListing>

        </ExportDivBackground>
    );
};

export default ListingCharacter;
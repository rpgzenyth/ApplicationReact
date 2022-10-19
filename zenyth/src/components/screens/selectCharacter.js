import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { ExportBtnWhite, ExportPersoName, ExportClassRace, ExportDivPerso, ExportTitre, ExportSubtitleLegend, ExportContentDiv, ExportListing, ExportLink } from '../style/exportedStyle';

const NewGame = () => {
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
        <ExportContentDiv>
            <ExportBtnWhite onClick={ () => history.push(`/create-character`)}>
                <ExportTitre>Créer un personnage</ExportTitre>
            </ExportBtnWhite>
            <ExportSubtitleLegend>ou</ExportSubtitleLegend>
            <ExportListing>
                {
                    results.map((result) => (
                        <ExportDivPerso key={result._id}>
                            <ExportLink onClick={ () => history.push(`/data-character/${result._id}`)}>
                                <ExportPersoName>{result.name}</ExportPersoName>
                                <ExportClassRace>{result.class} / {result.race}</ExportClassRace>
                            </ExportLink>
                        </ExportDivPerso>
                    ) )
                }
            </ExportListing>
        </ExportContentDiv>
    );
};

export default NewGame;
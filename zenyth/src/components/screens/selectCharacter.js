import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Listing, ContentDiv, DivPerso, Link, ClassRace, PersoName, BtnWhite, Titre, SubtitleLegend } from '../../config/styled';
import { useHistory } from 'react-router';

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
        <ContentDiv>
            <BtnWhite onClick={ () => history.push(`/create-character`)}>
                <Titre>Créer un personnage</Titre>
            </BtnWhite>
            <SubtitleLegend>ou</SubtitleLegend>
            <Listing>
                {
                    results.map((result) => (
                        <DivPerso key={result._id}>
                            <Link onClick={ () => history.push(`/data-character/${result._id}`)}>
                                <PersoName>{result.name}</PersoName>
                                <ClassRace>{result.class} / {result.race}</ClassRace>
                            </Link>
                        </DivPerso>
                    ) )
                }
            </Listing>
        </ContentDiv>
    );
};

export default NewGame;
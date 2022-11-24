import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { BtnWhite, PersoName, ClassRace, DivPerso, Titre, SubtitleLegend, ContentDiv, Listing, Link } from '../style/exportedStyle';
import { getToken } from '../../utils/token';
import { getCharactersByUser } from '../../hooks/useCharacterData';

const NewGame = () => {
    const history = useNavigate()

    const [results, setResults] = useState([]);

    useEffect(() => {
        const token = getToken();

        getCharactersByUser(token).then((data) => {
            setResults(data);
        });
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
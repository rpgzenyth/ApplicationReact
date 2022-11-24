import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import {VscPersonAdd} from 'react-icons/vsc'
import { DivBackground, PersoName, ClassRace, DivPerso, SubtitleLegend, TitleLegend, Listing, DivLegend, Link } from '../style/exportedStyle';
import { getToken } from '../../utils/token';
import { getCharactersByUser } from '../../hooks/useCharacterData';

const ListingCharacter = props => {
    const history = useNavigate()

    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const token = getToken();

        getCharactersByUser(token).then((data) => {
            setResults(data);
        });
    },[])


    return (
        <DivBackground background = {props.background}>
            <DivLegend>
                <TitleLegend>Nom du personnage</TitleLegend>
                <SubtitleLegend>Classe / Race</SubtitleLegend>
                <VscPersonAdd onClick={ () => history.push(`/create-character`)} size="35px" style= { {position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" , color: 'white' } }></VscPersonAdd>
            </DivLegend>

            <Listing>
                {
                    results.map((result) => (
                        <DivPerso key={result._id}>
                            <Link onClick={ () => history.push(`/update-character/${result._id}`)}>
                                <PersoName>{result.name}</PersoName>
                                <ClassRace>{result.class} / {result.race}</ClassRace>
                            </Link>
                        </DivPerso>
                    ) )
                }
            </Listing>

        </DivBackground>
    );
};

export default ListingCharacter;
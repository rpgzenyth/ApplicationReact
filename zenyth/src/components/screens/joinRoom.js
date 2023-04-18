import React, { useEffect, useState} from 'react';

import { joinGameroom, getGameroom, joinCharacterGameroom } from '../../hooks/useGameroomData';
import { getToken } from '../../utils/token';
import { DivBackground, PersoName, ClassRace, DivPerso, SubtitleLegend, TitleLegend, Listing, DivLegend, Link } from '../style/exportedStyle';
import { VscPersonAdd } from 'react-icons/vsc'
import { useNavigate } from 'react-router';
import { getCharactersByUser } from '../../hooks/useCharacterData';

const JoinRoom = props => {

    // eslint-disable-next-line
    const [params, setParams] = useState(new URLSearchParams(window.location.search));
    const token = getToken();

    const history = useNavigate();
    const [results, setResults] = useState([]);
    const [room, setRoom] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const chooseCharacter = (characterId) => {
        if (params.get("token") && token && characterId) {
            const data = {
                token: params.get("token"),
                characters: [
                    characterId
                ]
            };
            // Character join room 
            joinCharacterGameroom(data, token).then((data) => {
                // redirect to room page
                history(`/room?id=${params.get("id")}`);
            }).catch((error) => {
                setErrorMessage("Le token n'est pas correct");
            });
        }
    }


    useEffect(() => {
        if (params.get("token") && token && params.get("id")) {
            // Player join room
            joinGameroom({token: params.get("token")}, token).then((data) => {
                setRoom(data.data);
            }).catch((error) => {
                setErrorMessage("Le token n'est pas correct");
            });
            // Get room data
            getGameroom(params.get("id"), token).then((data) => {
                setRoom(data[0]);
            });
        } else {
            history(-1);
        }
        getCharactersByUser(token).then((data) => {
            setResults(data);
        });
    }, [params, history, token])

    return (
        <DivBackground background = {props.background}>
            { room ?
                <>
                    <DivLegend>
                        <TitleLegend>{ room.name }</TitleLegend>
                        <SubtitleLegend>Vous avez rejoint la room !</SubtitleLegend>
                        <SubtitleLegend>Choisissez un personnage</SubtitleLegend>
                        <VscPersonAdd onClick={ () => history(`/create-character?redirect=room`)} size="35px" style= { {position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" , color: 'white' } }></VscPersonAdd>
                    </DivLegend>
                    
                    <Listing>
                        {
                            results.map((result) => (
                                <DivPerso key={result._id}>
                                    <Link
                                        onClick={() => chooseCharacter(result._id) }
                                    >
                                        <PersoName>{result.name}</PersoName>
                                        <ClassRace>{result.class} / {result.race}</ClassRace>
                                    </Link>
                                </DivPerso>
                            ) )
                        }
                    </Listing>
                </>
                :
                <div>
                    <TitleLegend style={{marginTop: "2rem"}}>
                        {errorMessage}
                    </TitleLegend>
                </div>  
            }
            

        </DivBackground>
    );
};

export default JoinRoom;
import React, { useEffect, useState} from 'react';

import { joinGameroom } from '../../hooks/useGameroomData';
import { getToken } from '../../utils/token';
import { DivBackground, PersoName, ClassRace, DivPerso, SubtitleLegend, TitleLegend, Listing, DivLegend, Link } from '../style/exportedStyle';
import {VscPersonAdd} from 'react-icons/vsc'
import { useNavigate } from 'react-router';
import { getCharactersByUser } from '../../hooks/useCharacterData';


const JoinRoom = props => {

    const params = new URLSearchParams(window.location.search);
    const token = getToken();

    const history = useNavigate();
    const [results, setResults] = useState([]);
    const [room, setRoom] = useState();
    const [errorMessage, setErrorMessage] = useState();


    useEffect(() => {
        if (params.get("token")) {
            joinGameroom({token: params.get("token")}, token).then((data) => {
                setRoom(data.data[0]);
            }).catch((error) => {
                setErrorMessage("Le token n'est pas correct");
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
                <DivLegend>
                    <TitleLegend>{ room.name }</TitleLegend>
                    <SubtitleLegend>Choisi ton personnage</SubtitleLegend>
                    <VscPersonAdd onClick={ () => history.push(`/create-character`)} size="35px" style= { {position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" , color: 'white' } }></VscPersonAdd>
                </DivLegend>
            : ""}
            
            { !errorMessage ?
                <Listing>
                    {
                        results.map((result) => (
                            <DivPerso key={result._id}>
                                <Link
                                    // onClick={ () => history.push(`/data-character/${result._id}`)}
                                >
                                    <PersoName>{result.name}</PersoName>
                                    <ClassRace>{result.class} / {result.race}</ClassRace>
                                </Link>
                            </DivPerso>
                        ) )
                    }
                </Listing>
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
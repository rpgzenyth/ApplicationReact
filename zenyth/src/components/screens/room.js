import { TempBtn, DivBackgroundData } from "../style/exportedStyle";
import { SubtitleLegend, Text, TitlePage, Listing } from "../style/textStyle"
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import { getGameroom } from "../../hooks/useGameroomData";
import { getToken } from '../../utils/token';
import { getPlayer } from "../../hooks/usePlayerData";

const Room = props => {

    // eslint-disable-next-line
    const [params, setParams] = useState(new URLSearchParams(window.location.search));
    const token = getToken();

    const history = useNavigate();
    const [room, setRoom] = useState();
    const [characterId, setCharacterId] = useState();
    const [MJ, setMJ] = useState(false);

    useEffect(() => {
        // Get room data
        getGameroom(params.get("id"), token).then((data) => {
            setRoom(data[0]);
            const roomCharacters = data[0].characters;
            const roomCreator = data[0].creator;
            // Get player data
            getPlayer(token).then((data) => {
                const playerCharacters = data.characters
                
                roomCharacters && playerCharacters && roomCharacters.map((character) => {
                return(
                <>
                    {playerCharacters.includes(character._id) ? setCharacterId(character._id) : ""}
                </>)
                })
                return data._id === roomCreator ? setMJ(true) : "";
            })
            });
    }, [token, params])

    return (
        <>
            { room ? 
                <DivBackgroundData background={props.background}>
                        <TitlePage>{room.name}</TitlePage>
                        <SubtitleLegend>Date de création: {new Date(room.createdAt).toLocaleString("fr-FR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}</SubtitleLegend>
                        <TitlePage>Personnages</TitlePage>
                        <Listing>
                        {
                                room.characters.map((character) => (
                                    <div key={character._id}>
                                        <Text onClick={ () => MJ ? history(`/data-character/${character._id}?idRoom=${params.get("id")}`) : ""} style={ MJ ? { textDecoration: "underline", marginBottom: "10px"} : {marginBottom: "10px"} }>
                                            - {character.name} ({character.player.firstName} {character.player.lastName})
                                        </Text>
                                    </div>
                                ) )
                            }
                        </Listing>
                        { MJ ? "" : 
                            <TempBtn type='submit' onClick={ () => history(`/data-character/${characterId}?idRoom=${params.get("id")}`)}>Afficher stats character</TempBtn>
                        }
                        <TempBtn type='submit' onClick={ () => MJ ? history(`/roll-dice?idRoom=${params.get("id")}&id=MJ`) : history(`/roll-dice?idRoom=${params.get("id")}&id=${characterId}`)}>Lancée de dés</TempBtn>
                </DivBackgroundData>
            : ""}
        </>
    )
}

export default Room;
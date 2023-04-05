import { TempBtn, DivBackgroundData } from "../style/exportedStyle";
import { SubtitleLegend, Text, TitlePage } from "../style/textStyle"
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import { getGameroom } from "../../hooks/useGameroomData";
import { getToken } from '../../utils/token';

const Room = props => {

    const params = new URLSearchParams(window.location.search);
    const token = getToken();

    const history = useNavigate();
    const [room, setRoom] = useState();

    useEffect(() => {
        // Get room data
        getGameroom(params.get("id"), token).then((data) => {
            setRoom(data[0]);
        });
    }, [])

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
                        <div>
                        {
                                room.characters.map((character) => (
                                    <div key={character._id}>
                                        <Text>
                                            {character.name}
                                        </Text>
                                    </div>
                                ) )
                            }
                        </div>
                        <TempBtn type='submit' onClick={ () => history('/data-character/:id')}>Afficher stats character</TempBtn>
                        <TempBtn type='submit' onClick={ () => history('/roll-dice')}>Lancée de dés</TempBtn>
                </DivBackgroundData>
            : ""}
        </>
    )
}

export default Room;
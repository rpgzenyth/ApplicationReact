import React, { useState } from 'react';
import { ContentDiv, FormCreateGame, InputGame, Btn, BtnLinkGame, ShareLink, BtnCopy } from '../style/exportedStyle';
import { createGameroom } from '../../hooks/useGameroomData';
import { getToken } from '../../utils/token';

const NewGame = () => {

    const copy = async () => {
        await navigator.clipboard.writeText(shareLink);
    }

    const [gameName, setGameName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [shareLink, setShareLink] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = getToken();

        createGameroom(gameName, token).then((response) => {
            setGameName(response.data.name);
            setIsActive(true);
            setShareLink(window.location.origin+"/join-room?token="+response.data.token);
        });
    }

    return (
        <ContentDiv>

            <FormCreateGame onSubmit={(e) => handleSubmit(e)}>
                <InputGame
                    onChange={(e) => { setGameName({ ...gameName, name: e.target.value }) }}
                    name='GameName'
                    placeholder='Nom de la partie'
                    disabled={isActive ? true : false}>
                </InputGame>
                <Btn type='submit' style={isActive ? {display: "none"} : { display: "block" }}>Enregistrer</Btn>
            </FormCreateGame>

            <BtnLinkGame style={isActive ? {display: "flex"} : { display: "none" }}>
                <ShareLink>{shareLink}</ShareLink>
                <BtnCopy onClick={copy}>Copier</BtnCopy>
            </BtnLinkGame>


        </ContentDiv>
    );
};

export default NewGame;
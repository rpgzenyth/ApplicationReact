import React, { useState } from 'react';
import { ExportContentDiv, ExportFormCreateGame, ExportInputGame, ExportBtn, ExportBtnLinkGame, ExportShareLink, ExportBtnCopy } from '../style/exportedStyle';
import axios from 'axios';

const NewGame = () => {

    const copy = async () => {
        await navigator.clipboard.writeText("https://rpgzenyth/"+{shareLink});
    }

    const [gameName, setGameName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [shareLink, setShareLink] = useState("");
    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'POST',
            url: `http://localhost:3131/api/v1/gameRoom`,
            data: gameName,
            headers: {
                "content-type": "application/json",
                "authorization": token
            }
        }).then(function (response) {
            console.log(response);
            setGameName(response.data.data.name);
            setIsActive(true);
            setShareLink(response.data.data.token);
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <ExportContentDiv>

            <ExportFormCreateGame onSubmit={(e) => handleSubmit(e)}>
                <ExportInputGame
                    onChange={(e) => { setGameName({ ...gameName, name: e.target.value }) }}
                    name='GameName'
                    placeholder='Nom de la partie'
                    disabled={isActive ? true : false}>
                </ExportInputGame>
                <ExportBtn type='submit' style={isActive ? {display: "none"} : { display: "block" }}>Enregistrer</ExportBtn>
            </ExportFormCreateGame>

            <ExportBtnLinkGame style={isActive ? {display: "flex"} : { display: "none" }}>
                <ExportShareLink>https://rpgzenyth/{shareLink}</ExportShareLink>
                <ExportBtnCopy onClick={copy}>Copier</ExportBtnCopy>
            </ExportBtnLinkGame>


        </ExportContentDiv>
    );
};

export default NewGame;
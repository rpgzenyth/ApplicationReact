import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
import { ExportBigBtn, ExportFormCreatePerso, ExportDivForm, ExportLabelForm, ExportSubtitleForm, ExportTitleForm, ExportDivBackground, ExportHr, ExportTextareaStyled, ExportInputStyle } from '../style/exportedStyle';

const UpdateCharacter = props => {
    
    const [character, setCharacter] = useState([]);
    const history = useHistory()

    let {id} = useParams();

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3131/api/v1/characters/${id}`,
        }).then(function (response) {
            setCharacter(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'PUT',
            url: `http://localhost:3131/api/v1/characters/${id}`,
            data: character
        }).then(function (response) {
            history.push(`/listing-character`)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <ExportDivBackground background= {props.background}>
            <ExportFormCreatePerso onSubmit={(e) => handleSubmit(e)}>

                <ExportTitleForm>Modification de personnage</ExportTitleForm>

                <ExportSubtitleForm>Informations globales :</ExportSubtitleForm>

                <div>
                    <ExportLabelForm>Nom du personnage</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, name: e.target.value }) }}
                        name='CaracterName'
                        value={character.name}> 
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Race</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, race: e.target.value }) }}
                        name='CaracterRace'
                        value={character.race}>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Classe</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, class: e.target.value }) }}
                        name='CaracterClass'
                        value={character.class}>
                    </ExportInputStyle>
                </div>

                <ExportHr></ExportHr>

                <ExportSubtitleForm>Apparence du personnage :</ExportSubtitleForm>

                <div>
                    <ExportLabelForm>Age</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, age: e.target.value }) }}
                        name='CaracterAge'
                        value={character.age}>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Taille</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, waist: e.target.value }) }}
                        name='CaracterHeight'
                        value={character.waist}>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Poids</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, weight: e.target.value }) }}
                        name='CaracterWeight'
                        value={character.weight}>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Yeux</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, eyes: e.target.value }) }}
                        name='CaracterEyes'
                        value={character.eyes}>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Peau</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, skin: e.target.value }) }}
                        name='CaracterSkin'
                        value={character.skin}>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Cheveux</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, hair: e.target.value }) }}
                        name='CaracterHair'
                        value={character.hair}>
                    </ExportInputStyle>
                </div>


                <ExportHr></ExportHr>

                <ExportDivForm>

                    <ExportSubtitleForm>Descriptif du personnage :</ExportSubtitleForm>

                    <div>
                        <ExportLabelForm>Trait de personnalité</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, personality: e.target.value }) }}
                            name='CaracterTrait'
                            value={character.personality}>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Idéaux</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, ideals: e.target.value }) }}
                            name='CaracterIdeaux'
                            value={character.ideals}>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Liens</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, links: e.target.value }) }}
                            name='CaracterBigBtns'
                            value={character.links}>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Défauts</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, defects: e.target.value }) }}
                            name='CaracterDefects'
                            value={character.defects}>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Histoire du personnage</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, history: e.target.value }) }}
                            name='CaracterHistory'
                            value={character.history}>
                        </ExportTextareaStyled>
                    </div>
                </ExportDivForm>

                <ExportBigBtn type='submit'>Enregistrer</ExportBigBtn>
            </ExportFormCreatePerso>
        </ExportDivBackground>
    )
};

export default UpdateCharacter;

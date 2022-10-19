import React, { useState } from 'react';
import axios from 'axios';
import { ExportBtn, ExportFormCreatePerso, ExportDivForm, ExportLabelForm, ExportSubtitleForm, ExportTitleForm, ExportDivBackground, ExportHr, ExportTextareaStyled, ExportInputStyle } from '../style/exportedStyle';

const CreateCharacter = props => {
    
    const [character, setCharacter] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'POST',
            url: `http://localhost:3131/api/v1/characters`,
            data: character
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <ExportDivBackground background= {props.background}>
            <ExportFormCreatePerso onSubmit={(e) => handleSubmit(e)}>

                <ExportTitleForm>Création de personnage</ExportTitleForm>

                <ExportSubtitleForm>Informations globales :</ExportSubtitleForm>

                <div>
                    <ExportLabelForm>Nom du personnage</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, name: e.target.value }) }}
                        name='CaracterName'> 
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Race</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, race: e.target.value }) }}
                        name='CaracterRace'>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Classe</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, class: e.target.value }) }}
                        name='CaracterClass'>
                    </ExportInputStyle>
                </div>

                <ExportHr></ExportHr>

                <ExportSubtitleForm>Apparence du personnage :</ExportSubtitleForm>

                <div>
                    <ExportLabelForm>Age</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, age: e.target.value }) }}
                        name='CaracterAge'>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Taille</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, waist: e.target.value }) }}
                        name='CaracterHeight'>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Poids</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, weight: e.target.value }) }}
                        name='CaracterWeight'>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Yeux</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, eyes: e.target.value }) }}
                        name='CaracterEyes'>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Peau</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, skin: e.target.value }) }}
                        name='CaracterSkin'>
                    </ExportInputStyle>
                </div>

                <div>
                    <ExportLabelForm>Cheveux</ExportLabelForm>

                    <ExportInputStyle
                        onChange={(e) => { setCharacter({ ...character, hair: e.target.value }) }}
                        name='CaracterHair'>
                    </ExportInputStyle>
                </div>


                <ExportHr></ExportHr>

                <ExportDivForm>

                    <ExportSubtitleForm>Descriptif du personnage :</ExportSubtitleForm>

                    <div>
                        <ExportLabelForm>Trait de personnalité</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, personality: e.target.value }) }}
                            name='CaracterTrait'>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Idéaux</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, ideals: e.target.value }) }}
                            name='CaracterIdeaux'>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Liens</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, links: e.target.value }) }}
                            name='CaracterBigBtns'>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Défauts</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, defects: e.target.value }) }}
                            name='CaracterDefects'>
                        </ExportTextareaStyled>
                    </div>

                    <div>
                        <ExportLabelForm>Histoire du personnage</ExportLabelForm>

                        <ExportTextareaStyled
                            onChange={(e) => { setCharacter({ ...character, history: e.target.value }) }}
                            name='CaracterHistory'>
                        </ExportTextareaStyled>
                    </div>
                </ExportDivForm>

                <ExportBtn type='submit'>Enregistrer</ExportBtn>
            </ExportFormCreatePerso>
        </ExportDivBackground>
    )
};

export default CreateCharacter;

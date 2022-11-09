import React, { useState } from 'react';
import { Btn, FormCreatePerso, DivForm, LabelForm, SubtitleForm, TitleForm, DivBackground, Hr, TextareaStyled, InputStyled } from '../style/exportedStyle';
import { createCharacter } from '../../hooks/useCharacterData';
import { getToken } from '../../utils/token';

const CreateCharacter = props => {
    
    const [character, setCharacter] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = getToken();

        createCharacter(character, token).then((data) => {
            console.log(data);
        });
    }

    return (
        <DivBackground background= {props.background}>
            <FormCreatePerso onSubmit={(e) => handleSubmit(e)}>

                <TitleForm>Création de personnage</TitleForm>

                <SubtitleForm>Informations globales :</SubtitleForm>

                <div>
                    <LabelForm>Nom du personnage</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, name: e.target.value }) }}
                        name='CaracterName'> 
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Race</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, race: e.target.value }) }}
                        name='CaracterRace'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Classe</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, class: e.target.value }) }}
                        name='CaracterClass'>
                    </InputStyled>
                </div>

                <Hr></Hr>

                <SubtitleForm>Apparence du personnage :</SubtitleForm>

                <div>
                    <LabelForm>Age</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, age: e.target.value }) }}
                        name='CaracterAge'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Taille</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, waist: e.target.value }) }}
                        name='CaracterHeight'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Poids</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, weight: e.target.value }) }}
                        name='CaracterWeight'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Yeux</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, eyes: e.target.value }) }}
                        name='CaracterEyes'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Peau</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, skin: e.target.value }) }}
                        name='CaracterSkin'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Cheveux</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, hair: e.target.value }) }}
                        name='CaracterHair'>
                    </InputStyled>
                </div>


                <Hr></Hr>

                <DivForm>

                    <SubtitleForm>Descriptif du personnage :</SubtitleForm>

                    <div>
                        <LabelForm>Trait de personnalité</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, personality: e.target.value }) }}
                            name='CaracterTrait'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Idéaux</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, ideals: e.target.value }) }}
                            name='CaracterIdeaux'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Liens</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, links: e.target.value }) }}
                            name='CaracterBigBtns'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Défauts</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, defects: e.target.value }) }}
                            name='CaracterDefects'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Histoire du personnage</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, history: e.target.value }) }}
                            name='CaracterHistory'>
                        </TextareaStyled>
                    </div>
                </DivForm>

                <Btn type='submit'>Enregistrer</Btn>
            </FormCreatePerso>
        </DivBackground>
    )
};

export default CreateCharacter;

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import { Btn, FormCreatePerso, DivForm, LabelForm, SubtitleForm, TitleForm, DivBackground, Hr, TextareaStyled, InputStyled } from '../style/exportedStyle';
import { getCharacter, updateCharacter } from '../../hooks/useCharacterData';

const UpdateCharacter = props => {
    
    const [character, setCharacter] = useState([]);
    const history = useNavigate()

    let {id} = useParams();

    useEffect(() => {
    
        getCharacter(id).then((data) => {
            setCharacter(data);
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        updateCharacter(character).then((data) => {
            history(`/listing-character`);
        });
    }

    return (
        <DivBackground background= {props.background}>
            <FormCreatePerso onSubmit={(e) => handleSubmit(e)}>

                <TitleForm>Modification de personnage</TitleForm>

                <SubtitleForm>Informations globales :</SubtitleForm>

                <div>
                    <LabelForm>Nom du personnage</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, name: e.target.value }) }}
                        name='CaracterName'
                        value={character.name}> 
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Race</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, race: e.target.value }) }}
                        name='CaracterRace'
                        value={character.race}>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Classe</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, class: e.target.value }) }}
                        name='CaracterClass'
                        value={character.class}>
                    </InputStyled>
                </div>

                <Hr></Hr>

                <SubtitleForm>Apparence du personnage :</SubtitleForm>

                <div>
                    <LabelForm>Age</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, age: e.target.value }) }}
                        name='CaracterAge'
                        value={character.age}>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Taille</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, waist: e.target.value }) }}
                        name='CaracterHeight'
                        value={character.waist}>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Poids</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, weight: e.target.value }) }}
                        name='CaracterWeight'
                        value={character.weight}>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Yeux</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, eyes: e.target.value }) }}
                        name='CaracterEyes'
                        value={character.eyes}>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Peau</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, skin: e.target.value }) }}
                        name='CaracterSkin'
                        value={character.skin}>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Cheveux</LabelForm>

                    <InputStyled
                        onChange={(e) => { setCharacter({ ...character, hair: e.target.value }) }}
                        name='CaracterHair'
                        value={character.hair}>
                    </InputStyled>
                </div>


                <Hr></Hr>

                <DivForm>

                    <SubtitleForm>Descriptif du personnage :</SubtitleForm>

                    <div>
                        <LabelForm>Trait de personnalité</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, personality: e.target.value }) }}
                            name='CaracterTrait'
                            value={character.personality}>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Idéaux</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, ideals: e.target.value }) }}
                            name='CaracterIdeaux'
                            value={character.ideals}>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Liens</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, links: e.target.value }) }}
                            name='CaracterBigBtns'
                            value={character.links}>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Défauts</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, defects: e.target.value }) }}
                            name='CaracterDefects'
                            value={character.defects}>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Histoire du personnage</LabelForm>

                        <TextareaStyled
                            onChange={(e) => { setCharacter({ ...character, history: e.target.value }) }}
                            name='CaracterHistory'
                            value={character.history}>
                        </TextareaStyled>
                    </div>
                </DivForm>

                <Btn type='submit'>Enregistrer</Btn>
            </FormCreatePerso>
        </DivBackground>
    )
};

export default UpdateCharacter;

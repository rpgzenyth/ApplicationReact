import React, { useState } from 'react';
import { DivBackground, FormCreatePerso, DivForm, Hr, TextareaStyled, TitleForm, SubtitleForm, LabelForm, InputStyled, Btn } from '../../config/styled';

const Createperso = props => {
    
    const [CaracterName, setCaracterName] = useState('')
    const [CaracterClasse, setCaracterClass] = useState('')
    const [CaracterRace, setCaracterRace] = useState('')
    const [CaracterTrait, setCaracterTrait] = useState('')
    const [CaracterDefects, setCaracterDefects] = useState('')
    const [CaracterIdeaux, setCaracterIdeaux] = useState('')
    const [CaracterBigBtns, setCaracterBigBtns] = useState('')
    const [CaracterAge, setCaracterAge] = useState('')
    const [CaracterHeight, setCaracterHeight] = useState('')
    const [CaracterWeight, setCaracterWeight] = useState('')
    const [CaracterEyes, setCaracterEyes] = useState('')
    const [CaracterSkin, setCaracterSkin] = useState('')
    const [CaracterHair, setCaracterHair] = useState('')
    const [CaracterHistory, setCaracterHistory] = useState('')


    return (
        <DivBackground background= {props.background}>
            <FormCreatePerso onSubmit={onsubmit}>

                <TitleForm>Création de personnage</TitleForm>

                <SubtitleForm>Informations globales :</SubtitleForm>

                <div>
                    <LabelForm>Nom du personnage</LabelForm>

                    <InputStyled
                        value={CaracterName}
                        onChange={e => setCaracterName(e.target.value)}
                        name='CaracterName'> 
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Race</LabelForm>

                    <InputStyled
                        value={CaracterRace}
                        onChange={e => setCaracterRace(e.target.value)}
                        name='CaracterRace'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Classe</LabelForm>

                    <InputStyled
                        value={CaracterClasse}
                        onChange={e => setCaracterClass(e.target.value)}
                        name='CaracterClass'>
                    </InputStyled>
                </div>

                <Hr></Hr>

                <SubtitleForm>Apparence du personnage :</SubtitleForm>

                <div>
                    <LabelForm>Age</LabelForm>

                    <InputStyled
                        value={CaracterAge}
                        onChange={e => setCaracterAge(e.target.value)}
                        name='CaracterAge'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Taille</LabelForm>

                    <InputStyled
                        value={CaracterHeight}
                        onChange={e => setCaracterHeight(e.target.value)}
                        name='CaracterHeight'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Poids</LabelForm>

                    <InputStyled
                        value={CaracterWeight}
                        onChange={e => setCaracterWeight(e.target.value)}
                        name='CaracterWeight'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Yeux</LabelForm>

                    <InputStyled
                        value={CaracterEyes}
                        onChange={e => setCaracterEyes(e.target.value)}
                        name='CaracterEyes'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Peau</LabelForm>

                    <InputStyled
                        value={CaracterSkin}
                        onChange={e => setCaracterSkin(e.target.value)}
                        name='CaracterSkin'>
                    </InputStyled>
                </div>

                <div>
                    <LabelForm>Cheveux</LabelForm>

                    <InputStyled
                        value={CaracterHair}
                        onChange={e => setCaracterHair(e.target.value)}
                        name='CaracterHair'>
                    </InputStyled>
                </div>


                <Hr></Hr>

                <DivForm>

                    <SubtitleForm>Descriptif du personnage :</SubtitleForm>

                    <div>
                        <LabelForm>Trait de personnalité</LabelForm>

                        <TextareaStyled
                            value={CaracterTrait}
                            onChange={e => setCaracterTrait(e.target.value)}
                            name='CaracterTrait'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Idéaux</LabelForm>

                        <TextareaStyled
                            value={CaracterIdeaux}
                            onChange={e => setCaracterIdeaux(e.target.value)}
                            name='CaracterIdeaux'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Liens</LabelForm>

                        <TextareaStyled
                            value={CaracterBigBtns}
                            onChange={e => setCaracterBigBtns(e.target.value)}
                            name='CaracterBigBtns'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Défauts</LabelForm>

                        <TextareaStyled
                            value={CaracterDefects}
                            onChange={e => setCaracterDefects(e.target.value)}
                            name='CaracterDefects'>
                        </TextareaStyled>
                    </div>

                    <div>
                        <LabelForm>Histoire du personnage</LabelForm>

                        <TextareaStyled
                            value={CaracterHistory}
                            onChange={e => setCaracterHistory(e.target.value)}
                            name='CaracterHistory'>
                        </TextareaStyled>
                    </div>
                </DivForm>

                <Btn type='submit'>Enregistrer</Btn>
            </FormCreatePerso>
        </DivBackground>
    )
};

export default Createperso;

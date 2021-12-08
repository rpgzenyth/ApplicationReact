import React, { useState } from 'react';
import { DivBackground, FormCreatePerso, InputStyled, Link } from '../../config/styled';

const Createperso = props => {
    
    const [CaracterName, setCaracterName] = useState('')
    const [CaracterClasse, setCaracterClass] = useState('')
    const [CaracterRace, setCaracterRace] = useState('')
    const [CaracterTrait, setCaracterTrait] = useState('')
    const [CaracterIdeaux, setCaracterIdeaux] = useState('')


    return (
        <DivBackground background= {props.background}>
            <FormCreatePerso onSubmit={onsubmit}>

            <div className='subtitleForm'>
                <h1>Nom du personnage</h1>
            </div>

            <InputStyled
                value={CaracterName}
                onChange={e => setCaracterName(e.target.value)}
                name='CaracterName'
                placeholder='Nom du personnage'
            ></InputStyled>

            <div className='subtitleForm'>
                <h1>Nom du personnage</h1>
            </div>

            <InputStyled
                value={CaracterRace}
                onChange={e => setCaracterRace(e.target.value)}
                name='CaracterRace'
                placeholder='Race'
            ></InputStyled>
            <InputStyled
                value={CaracterClasse}
                onChange={e => setCaracterClass(e.target.value)}
                name='CaracterClass'
                placeholder='Classe'
            ></InputStyled>

            <InputStyled
                value={CaracterTrait}
                onChange={e => setCaracterTrait(e.target.value)}
                name='CaracterTrait'
                placeholder='Trait de personnalité'
            ></InputStyled>
            <InputStyled
                value={CaracterIdeaux}
                onChange={e => setCaracterIdeaux(e.target.value)}
                name='CaracterIdeaux'
                placeholder='Idéaux'
            ></InputStyled>

            <Link type='submit' placeholder='Connexion'></Link>
            </FormCreatePerso>
        </DivBackground>
    )
};

export default Createperso;

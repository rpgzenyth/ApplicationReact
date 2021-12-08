import React, { useState } from 'react';
import { FormCreatePerso, InputStyled, Link } from '../../config/styled';

const Createperso = () => {
    
    const [CaracterName, setCaracterName] = useState('')
    const [CaracterClasse, setCaracterClass] = useState('')
    const [CaracterRace, setCaracterRace] = useState('')
    const [CaracterExp, setCaracterExp] = useState('')
    const [CaracterClasse, setCaracterClass] = useState('')
    const [CaracterClasse, setCaracterClass] = useState('')
    const [CaracterClasse, setCaracterClass] = useState('')

    return (
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
            value={CaracterExp}
            onChange={e => setCaracterExp(e.target.value)}
            name='CaracterExp'
            placeholder='Expericence'
        ></InputStyled>
        <InputStyled
            value={CaracterClasse}
            onChange={e => setCaracterClass(e.target.value)}
            name='CaracterClass'
            placeholder='Classe'
        ></InputStyled>
        <InputStyled
            value={CaracterClasse}
            onChange={e => setCaracterClass(e.target.value)}
            name='CaracterClass'
            placeholder='Classe'
        ></InputStyled>
        <Link type='submit' placeholder='Connexion'></Link>
        </FormCreatePerso>
    )
};

export default Createperso;

import React, { useState } from 'react';
import { FormCreatePerso, InputStyled, Link } from '../../config/styled';

const Createperso = () => {
    
    const [CaracterName, setCaracterName] = useState('')
    const [CaracterClasse, setCaracterClass] = useState('')
    const [CaracterRace, setCaracterRace] = useState('')
    const [CaracterTrait, setCaracterTrait] = useState('')
    const [CaracterDefects, setCaracterDefects] = useState('')
    const [CaracterIdeaux, setCaracterIdeaux] = useState('')
    const [CaracterLinks, setCaracterLinks] = useState('')
    const [CaracterAge, setCaracterAge] = useState('')
    const [CaracterHeight, setCaracterHeight] = useState('')
    const [CaracterWeight, setCaracterWeight] = useState('')
    const [CaracterEyes, setCaracterEyes] = useState('')
    const [CaracterSkin, setCaracterSkin] = useState('')
    const [CaracterHair, setCaracterHair] = useState('')
    const [CaracterHistory, setCaracterHistory] = useState('')


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

        <div className='subtitleForm'>
            <h1>Race</h1>
        </div>

        <InputStyled
            value={CaracterRace}
            onChange={e => setCaracterRace(e.target.value)}
            name='CaracterRace'
            placeholder='Race'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Classe</h1>
        </div>

        <InputStyled
            value={CaracterClasse}
            onChange={e => setCaracterClass(e.target.value)}
            name='CaracterClass'
            placeholder='Classe'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Trait de personnalité</h1>
        </div>

        <InputStyled
            value={CaracterTrait}
            onChange={e => setCaracterTrait(e.target.value)}
            name='CaracterTrait'
            placeholder='Trait de personnalité'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Idéaux</h1>
        </div>

        <InputStyled
            value={CaracterIdeaux}
            onChange={e => setCaracterIdeaux(e.target.value)}
            name='CaracterIdeaux'
            placeholder='Idéaux'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Liens</h1>
        </div>

        <InputStyled
            value={CaracterLinks}
            onChange={e => setCaracterLinks(e.target.value)}
            name='CaracterLinks'
            placeholder='Liens'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Défauts</h1>
        </div>

        <InputStyled
            value={CaracterDefects}
            onChange={e => setCaracterDefects(e.target.value)}
            name='CaracterDefects'
            placeholder='Défauts'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Age</h1>
        </div>

        <InputStyled
            value={CaracterAge}
            onChange={e => setCaracterAge(e.target.value)}
            name='CaracterAge'
            placeholder='Age'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Taille</h1>
        </div>

        <InputStyled
            value={CaracterHeight}
            onChange={e => setCaracterHeight(e.target.value)}
            name='CaracterHeight'
            placeholder='Taille'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Poids</h1>
        </div>

        <InputStyled
            value={CaracterWeight}
            onChange={e => setCaracterWeight(e.target.value)}
            name='CaracterWeight'
            placeholder='Poids'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Yeux</h1>
        </div>

        <InputStyled
            value={CaracterEyes}
            onChange={e => setCaracterEyes(e.target.value)}
            name='CaracterEyes'
            placeholder='Yeux'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Peau</h1>
        </div>

        <InputStyled
            value={CaracterSkin}
            onChange={e => setCaracterSkin(e.target.value)}
            name='CaracterSkin'
            placeholder='Peau'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Cheveux</h1>
        </div>

        <InputStyled
            value={CaracterHair}
            onChange={e => setCaracterHair(e.target.value)}
            name='CaracterHair'
            placeholder='Cheveux'
        ></InputStyled>

        <div className='subtitleForm'>
            <h1>Histoire du personnage</h1>
        </div>

        <InputStyled
            value={CaracterHistory}
            onChange={e => setCaracterHistory(e.target.value)}
            name='CaracterHistory'
            placeholder='Histoire'
        ></InputStyled>

        <Link type='submit' placeholder='Connexion'></Link>
        </FormCreatePerso>
    )
};

export default Createperso;

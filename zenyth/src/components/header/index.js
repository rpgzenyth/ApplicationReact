import React, { useState } from 'react';
import {StyledHeader,Titre, BlurBackground} from '../../config/styled'
import {MdOutlineKeyboardArrowLeft, MdSettings} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useHistory } from 'react-router';
import {BigBtn, FondPopUp, ContainerPopUp} from '../../config/styled'

const Header = () => {

  const [afficherMenuBurger, setAfficherMenuBurger] = useState(false)

  const [afficherParametres, setAfficherParametres] = useState(false)

    const history = useHistory()

    const menuBurger = () =>{
      setAfficherMenuBurger(!afficherMenuBurger)
    }

    const menuParam = () =>{
      setAfficherParametres(!afficherParametres)
    }

    return (
      <div>
        <StyledHeader>
          <MdOutlineKeyboardArrowLeft onClick={ () => history.goBack() } size="30px" style= { {position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/>
          <Titre onClick={ () => history.push(`/`) }>Zenyth rpg</Titre>
          <FiMenu onClick={() => menuBurger()} size="30px" style= { { position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/>
          <MdSettings onClick={() => menuParam()} size="30px" style= { { position: "absolute", right: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/>
          { afficherMenuBurger === true ?
          <FondPopUp>
            <ContainerPopUp>
              <AiFillCloseCircle onClick={() => menuBurger()} size="30px" style= { {position: "absolute", right: "-0.8em", top: "-0.8em", color: '#c4c4c4' } }/>
              <BigBtn onClick={ () => history.push(`/lancede`)}>Lancé de dés</BigBtn>
              <BigBtn onClick={ () => history.push(`/`)}>Black board</BigBtn>
              <BigBtn onClick={ () => history.push(`/`)}>Banque d'objets</BigBtn>
              <BigBtn onClick={ () => history.push(`/`)}>Bestiaire de l'univers</BigBtn>
            </ContainerPopUp>
            <BlurBackground></BlurBackground>
          </FondPopUp>
          : null}
          { afficherParametres === true ?
          <FondPopUp>
            <ContainerPopUp>
              <AiFillCloseCircle onClick={() => menuParam()} size="30px" style= { {position: "absolute", right: "-0.8em", top: "-0.8em", color: '#c4c4c4' } }/>
              <BigBtn onClick={ () => history.push(`/`)}>Sauvegarder</BigBtn>
              <BigBtn onClick={ () => history.push(`/`)}>Tutoriel</BigBtn>
              <BigBtn onClick={ () => history.push(`/`)}>Retour au menu</BigBtn>
            </ContainerPopUp>
            <BlurBackground></BlurBackground>
          </FondPopUp>
          : null}
        </StyledHeader>
      </div>
    )
}

export default Header
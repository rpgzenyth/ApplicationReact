import React, { useState } from 'react';
import {MdOutlineKeyboardArrowLeft, MdSettings} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router';
import { StyledHeader,BigBtn, FondPopUp, ContainerPopUp, BlurBackground, Titre } from '../style/exportedStyle';

const Header = (props) => {

  const [afficherMenuBurger, setAfficherMenuBurger] = useState(false)

  const [afficherParametres, setAfficherParametres] = useState(false)

  const history = useNavigate()

  const menuBurger = () =>{
    setAfficherMenuBurger(!afficherMenuBurger)
  }

  const menuParam = () =>{
    setAfficherParametres(!afficherParametres)
  }

  return (
    <div>
      <StyledHeader>
        { props.Back ? <MdOutlineKeyboardArrowLeft onClick={ () => history(-1) } size="30px" style= { {position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/> : null }
        <Titre onClick={ () => history(`/`) }>Zenyth rpg</Titre>
        { props.Burger ? <FiMenu onClick={() => menuBurger()} size="30px" style= { { position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/> : null }
        { props.Param ? <MdSettings onClick={() => menuParam()} size="30px" style= { { position: "absolute", right: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/> : null }
        { afficherMenuBurger === true ?
        <FondPopUp>
          <ContainerPopUp>
            <AiFillCloseCircle onClick={() => menuBurger()} size="30px" style= { {position: "absolute", right: "-0.8em", top: "-0.8em", color: '#c4c4c4' } }/>
            <BigBtn onClick={ () => history(`/roll-dice`)}>Lancé de dés</BigBtn>
            <BigBtn onClick={ () => history(`/`)}>Black board</BigBtn>
            <BigBtn onClick={ () => history(`/`)}>Banque d'objets</BigBtn>
            <BigBtn onClick={ () => history(`/`)}>Bestiaire de l'univers</BigBtn>
          </ContainerPopUp>
          <BlurBackground></BlurBackground>
        </FondPopUp>
        : null}
        { afficherParametres === true ?
        <FondPopUp>
          <ContainerPopUp>
            <AiFillCloseCircle onClick={() => menuParam()} size="30px" style= { {position: "absolute", right: "-0.8em", top: "-0.8em", color: '#c4c4c4' } }/>
            <BigBtn onClick={ () => history(`/`)}>Sauvegarder</BigBtn>
            <BigBtn onClick={ () => history(`/`)}>Tutoriel</BigBtn>
            <BigBtn onClick={ () => history(`/`)}>Retour au menu</BigBtn>
          </ContainerPopUp>
          <BlurBackground></BlurBackground>
        </FondPopUp>
        : null}
      </StyledHeader>
    </div>
  )
}

export default Header
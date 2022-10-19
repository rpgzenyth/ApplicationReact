import React, { useState } from 'react';
import {MdOutlineKeyboardArrowLeft, MdSettings} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useHistory } from 'react-router';
import { ExportStyleHeader,ExportBigBtn, ExportFondPopUp, ExportContainerPopUp, ExportBlurBackground, ExportTitre } from '../style/exportedStyle';

const Header = (props) => {

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
      <ExportStyleHeader>
        { props.Back ? <MdOutlineKeyboardArrowLeft onClick={ () => history.goBack() } size="30px" style= { {position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/> : null }
        <ExportTitre onClick={ () => history.push(`/`) }>Zenyth rpg</ExportTitre>
        { props.Burger ? <FiMenu onClick={() => menuBurger()} size="30px" style= { { position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/> : null }
        { props.Param ? <MdSettings onClick={() => menuParam()} size="30px" style= { { position: "absolute", right: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/> : null }
        { afficherMenuBurger === true ?
        <ExportFondPopUp>
          <ExportContainerPopUp>
            <AiFillCloseCircle onClick={() => menuBurger()} size="30px" style= { {position: "absolute", right: "-0.8em", top: "-0.8em", color: '#c4c4c4' } }/>
            <ExportBigBtn onClick={ () => history.push(`/roll-dice`)}>Lancé de dés</ExportBigBtn>
            <ExportBigBtn onClick={ () => history.push(`/`)}>Black board</ExportBigBtn>
            <ExportBigBtn onClick={ () => history.push(`/`)}>Banque d'objets</ExportBigBtn>
            <ExportBigBtn onClick={ () => history.push(`/`)}>Bestiaire de l'univers</ExportBigBtn>
          </ExportContainerPopUp>
          <ExportBlurBackground></ExportBlurBackground>
        </ExportFondPopUp>
        : null}
        { afficherParametres === true ?
        <ExportFondPopUp>
          <ExportContainerPopUp>
            <AiFillCloseCircle onClick={() => menuParam()} size="30px" style= { {position: "absolute", right: "-0.8em", top: "-0.8em", color: '#c4c4c4' } }/>
            <ExportBigBtn onClick={ () => history.push(`/`)}>Sauvegarder</ExportBigBtn>
            <ExportBigBtn onClick={ () => history.push(`/`)}>Tutoriel</ExportBigBtn>
            <ExportBigBtn onClick={ () => history.push(`/`)}>Retour au menu</ExportBigBtn>
          </ExportContainerPopUp>
          <ExportBlurBackground></ExportBlurBackground>
        </ExportFondPopUp>
        : null}
      </ExportStyleHeader>
    </div>
  )
}

export default Header
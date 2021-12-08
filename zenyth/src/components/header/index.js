import React, { useState } from 'react';
import {StyledHeader,Titre, BlurBackground} from '../../config/styled'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useHistory } from 'react-router';
import {Link, FondPopUp, ContainerPopUp} from '../../config/styled'

const Header = () => {

  const [afficher, setAfficher] = useState(false)

    const history = useHistory()

    const menuBurger = () =>{
      setAfficher(!afficher)
    }

    return (
      <div>
        <StyledHeader>
          <MdOutlineKeyboardArrowLeft onClick={ () => history.goBack() } size="30px" style= { {position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/>
          <Titre onClick={ () => history.push(`/`) }>Zenyth rpg</Titre>
          <FiMenu onClick={() => menuBurger()} size="30px" style= { { position: "absolute", right: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/>
          { afficher === true ?
          <FondPopUp>
            <ContainerPopUp>
              <AiFillCloseCircle onClick={() => menuBurger()} size="30px" style= { {position: "absolute", right: "-0.8em", top: "-0.8em", color: '#c4c4c4' } }/>
              <Link onClick={ () => history.push(`/`)}>Lancé de dés</Link>
              <Link onClick={ () => history.push(`/`)}>Black board</Link>
              <Link onClick={ () => history.push(`/`)}>Banque d'objets</Link>
              <Link onClick={ () => history.push(`/`)}>Bestiaire de l'univers</Link>
            </ContainerPopUp>
            <BlurBackground></BlurBackground>
          </FondPopUp>
          : null}
        </StyledHeader>
      </div>
    )
}

export default Header
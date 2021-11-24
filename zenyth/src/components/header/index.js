import React from 'react';
import {StyledHeader,Titre} from '../../config/styled'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import { useHistory } from 'react-router';

const Header = () => {

    const history = useHistory()

    return (
      <div>
        <StyledHeader>
          <MdOutlineKeyboardArrowLeft onClick={ () => history.goBack() } size="30px" style= { {position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/>
          <Titre onClick={ () => history.push(`/`) }>Zenyth rpg</Titre>
        </StyledHeader>
      </div>
    )
}

export default Header
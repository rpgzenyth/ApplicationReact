import React from 'react';
import {StyledHeader,Titre} from '../../config/styled'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'

const Header = () => {
    return (
      <div>
        <StyledHeader>
          <MdOutlineKeyboardArrowLeft size="30px" style= { {position: "absolute", left: "1em", top: "50%", transform: "translateY(-50%)", color: 'white' } }/>
          <Titre>Zenyth rpg</Titre>
        </StyledHeader>
      </div>
    )
}

export default Header
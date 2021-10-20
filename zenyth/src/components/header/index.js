import React from 'react';
import logo from '../../logo.png';
import {HeaderImg, StyledHeader} from '../../config/styled'

const Header = () => {
    return (
      
      <StyledHeader>
        <HeaderImg src={logo}></HeaderImg>
      </StyledHeader>
    )
}

export default Header
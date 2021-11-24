import React from 'react';
import {StyledFooter, ImgLink } from '../../config/styled'
import { useHistory } from 'react-router';
import dice from '../../images/dice.png';
import bag from '../../images/bag.png';
import tools from '../../images/tools.png';
import potion from '../../images/potion.png';
import sword from '../../images/sword.png';
import description from '../../images/description.png';

const Footer = () => {

    const history = useHistory()

    return (
      <div>
        <StyledFooter>
            <ImgLink src={dice} onClick={ () => history.push(`/new-game`)}></ImgLink>
            <ImgLink src={bag} onClick={ () => history.push(`/load-game`)}></ImgLink>
            <ImgLink src={tools} onClick={ () => history.push(`/parameters`)}></ImgLink>
            <ImgLink src={potion} onClick={ () => history.push(`/parameters`)}></ImgLink>
            <ImgLink src={sword} onClick={ () => history.push(`/parameters`)}></ImgLink>
            <ImgLink src={description} onClick={ () => history.push(`/parameters`)}></ImgLink>
        </StyledFooter>
      </div>
    )
}

export default Footer
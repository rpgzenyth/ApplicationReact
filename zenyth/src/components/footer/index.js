import React from 'react';
import {StyledFooter, ImgLink, FooterDiv } from '../../config/styled'
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
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgLink src={dice}></ImgLink>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgLink src={bag}></ImgLink>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgLink src={tools}></ImgLink>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgLink src={potion}></ImgLink>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgLink src={sword}></ImgLink>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgLink src={description}></ImgLink>
            </FooterDiv>
        </StyledFooter>
      </div>
    )
}

export default Footer
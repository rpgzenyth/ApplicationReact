import React from 'react';
import {StyledFooter, ImgBigBtn, FooterDiv } from '../../config/styled'
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
                <ImgBigBtn src={dice}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgBigBtn src={bag}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgBigBtn src={tools}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgBigBtn src={potion}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgBigBtn src={sword}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv onClick={ () => history.push(`/`)}>
                <ImgBigBtn src={description}></ImgBigBtn>
            </FooterDiv>
        </StyledFooter>
      </div>
    )
}

export default Footer
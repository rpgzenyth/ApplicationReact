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

    const ChangeBack = () =>{
        
    }


    return (
      <div>
        <StyledFooter>
            <FooterDiv image={background} onClick={() =>  }>
                <ImgBigBtn src={dice}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv>
                <ImgBigBtn src={bag}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv>
                <ImgBigBtn src={tools}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv>
                <ImgBigBtn src={potion}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv>
                <ImgBigBtn src={sword}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv>
                <ImgBigBtn src={description}></ImgBigBtn>
            </FooterDiv>
        </StyledFooter>
      </div>
    )
}

export default Footer
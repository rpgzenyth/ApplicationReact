import React, {useState} from 'react';
import {StyledFooter, ImgBigBtn, FooterDiv } from '../../config/styled'
import dice from '../../images/dice.png';
import bag from '../../images/bag.png';
import tools from '../../images/tools.png';
import potion from '../../images/potion.png';
import sword from '../../images/sword.png';
import description from '../../images/description.png';



const Footer = () => {

    const [background, setbackground] = useState('none');
    const [background2, setbackground2] = useState('none');
    const [background3, setbackground3] = useState('none');
    const [background4, setbackground4] = useState('none');
    const [background5, setbackground5] = useState('none');
    const [background6, setbackground6] = useState('none');


    const ChangeBack = (name, fonction) =>{
        switch (name){
            case 'none':
                setbackground('none')
                setbackground2('none')
                setbackground3('none')
                setbackground4('none')
                setbackground5('none')
                setbackground6('none')
                fonction('white')
                break
            case 'white':
                fonction('none')
                break
            default:
                break
        }        
    }


    return (
      <div>
        <StyledFooter>
            <FooterDiv image={background} onClick={() => ChangeBack(background, setbackground) }>
                <ImgBigBtn src={dice}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv image={background2} onClick={() => ChangeBack(background2, setbackground2) }>
                <ImgBigBtn src={bag}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv image={background3} onClick={() => ChangeBack(background3, setbackground3) }>
                <ImgBigBtn src={tools}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv image={background4} onClick={() => ChangeBack(background4, setbackground4) }>
                <ImgBigBtn src={potion}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv image={background5} onClick={() => ChangeBack(background5, setbackground5) }>
                <ImgBigBtn src={sword}></ImgBigBtn>
            </FooterDiv>
            <FooterDiv image={background6} onClick={() => ChangeBack(background6, setbackground6) }>
                <ImgBigBtn src={description}></ImgBigBtn>
            </FooterDiv>
        </StyledFooter>
      </div>
    )
}

export default Footer
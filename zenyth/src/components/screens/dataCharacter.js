import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { DivBackground, FooterDiv, ImgBigBtn, StyledFooter } from '../../config/styled';
import dice from '../../images/dice.png';
import bag from '../../images/bag.png';
import tools from '../../images/tools.png';
import potion from '../../images/potion.png';
import sword from '../../images/sword.png';
import description from '../../images/description.png';

const DataCharacter = props => {

    const [character, setCharacter] = useState([]);
    let {id} = useParams();

    // Footer
    const [background, setbackground] = useState('none');
    const [background2, setbackground2] = useState('none');
    const [background3, setbackground3] = useState('none');
    const [background4, setbackground4] = useState('none');
    const [background5, setbackground5] = useState('none');
    const [background6, setbackground6] = useState('none');
    const [chose, setChose] = useState("none");
    

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3131/api/v1/characters/${id}`,
        }).then(function (response) {
            setCharacter(response.data);
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    },[])


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
                setChose("none")
                break
            default:
                break
        }
    }


    return (
        <>
            <DivBackground>

                { chose === "none" ?

                    <p>none</p> 
                    


                    :
                    null
                }

                { chose === "dice" ?

                    <p>dice</p> 
                    :
                    null
                }
                <p>test</p>




            </DivBackground>
            <StyledFooter>
                <FooterDiv image={background} onClick={() => {setChose("dice"); ChangeBack(background, setbackground)}}>
                    <ImgBigBtn src={dice}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background2} onClick={() => {setChose("bag"); ChangeBack(background2, setbackground2)}}>
                    <ImgBigBtn src={bag}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background3} onClick={() => {setChose("tools"); ChangeBack(background3, setbackground3)}}>
                    <ImgBigBtn src={tools}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background4} onClick={() => {setChose("potion"); ChangeBack(background4, setbackground4)}}>
                    <ImgBigBtn src={potion}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background5} onClick={() => {setChose("sword"); ChangeBack(background5, setbackground5)}}>
                    <ImgBigBtn src={sword}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background6} onClick={() => {setChose("description"); ChangeBack(background6, setbackground6)}}>
                    <ImgBigBtn src={description}></ImgBigBtn>
                </FooterDiv>
            </StyledFooter>
        </>
    )



};

export default DataCharacter;
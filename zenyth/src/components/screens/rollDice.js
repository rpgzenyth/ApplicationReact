import React from 'react';
import {Dice, DivBackground, DiceDiv, TitlePage} from '../../config/styled'

const RollDice = (props) => {

    return (
        <DivBackground background = {props.background}>
            <TitlePage>Lancé de dés</TitlePage>

            <DiceDiv>
                <Dice>4</Dice>
                <Dice>6</Dice>
                <Dice>8</Dice>
            </DiceDiv>
            <DiceDiv>   
                <Dice>10</Dice>
                <Dice>12</Dice>
                <Dice>20</Dice>
                <Dice>100</Dice>
            </DiceDiv>
        </DivBackground>
    );
};


export default RollDice;
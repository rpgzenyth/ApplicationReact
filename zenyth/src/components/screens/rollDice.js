import React, {useState} from 'react';
import {Dice, DivBackground, DiceDiv, TitlePage, ResultDice, RollHistory} from '../../config/styled'

const RollDice = (props) => {

    const [randomNumber, setRandomNumber] = useState();
    const [diceNumber, setDiceNumber] = useState();

    const d4 = 4;
    const d6 = 6;
    const d8 = 8;
    const d10 = 10;
    const d12 = 12;
    const d20 = 20;
    const d100 = 100;

    const RollDice = (dice) => {
        const min = 1;
        const max = dice + 1;
        const random = Math.floor(Math.random() * (max - min)) + min;
        setRandomNumber(random);
    }

    return (
        <DivBackground background = {props.background}>
            <TitlePage>Lancé de dés</TitlePage>
            <ResultDice onChange={e => setRandomNumber(e.target.value)}>{randomNumber ? randomNumber : ""}</ResultDice>
            <hr></hr>
            <DiceDiv>
                <Dice onClick={() => RollDice(d4) }>{d4}</Dice>
                <Dice onClick={() => RollDice(d6) }>{d6}</Dice>
                <Dice onClick={() => RollDice(d8) }>{d8}</Dice>
            </DiceDiv>
            <DiceDiv>   
                <Dice onClick={() => RollDice(d10) }>{d10}</Dice>
                <Dice onClick={() => RollDice(d12) }>{d12}</Dice>
                <Dice onClick={() => RollDice(d20) }>{d20}</Dice>
                <Dice onClick={() => RollDice(d100) }>{d100}</Dice>
            </DiceDiv>
            <RollHistory></RollHistory>
        </DivBackground>
    );
};


export default RollDice;
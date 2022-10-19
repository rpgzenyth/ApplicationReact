import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { TempBtn, DivBackground, TempFooter, Dice, HistoryResult, ResultDice, TitlePage, DiceDiv, RollHistory } from '../style/exportedStyle';

const RollDice = (props) => {

    const history = useHistory()

    const [randomNumber, setRandomNumber] = useState();
    const [historyRoll, setResultHistory] = useState([]);
    const [x, setX] = useState(1);

    const d4 = 4;
    const d6 = 6;
    const d8 = 8;
    const d10 = 10;
    const d12 = 12;
    const d20 = 20;
    const d100 = 100;
    const [count, setCount] = useState(1);

    useEffect(() => {
        localStorage.removeItem("historyRoll")
    },[])
    
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1);
        } else {
            alert("Min 1")
        }
    };
    
    const increment = () => {
        if(count < 10){
            setCount(count + 1);
        }else{
            alert("Max 10")
        }
    };

    const RollDice = (dice) => {

        var y = 0;
        let resultDice = {
            id: x,
            result: [],
            dice: dice,
            sum: 0
        };
        setX(x+1)
        console.log(x)
        

        while(y < count) {
            y += 1;
            const min = 1;
            const max = dice + 1;
            const random = Math.floor(Math.random() * (max - min)) + min;
            setRandomNumber(random);
            resultDice.result.push(random);
            setResultHistory([resultDice, ...historyRoll]);
            let sum = 0;
            for (let num of resultDice.result){
                sum = sum + num
            }
            resultDice.sum = sum;
        }    
    }

    useEffect(() => {
        localStorage.setItem("historyRoll", JSON.stringify(historyRoll));
    }, [historyRoll]);
    
    return (
        <>
        <DivBackground background = {props.background}>
            <TitlePage>Lancé de dés</TitlePage>
            <DiceDiv>
                <Dice onClick={decrement}>-</Dice>
                <Dice>{count}</Dice>
                <Dice onClick={increment}>+</Dice>
            </DiceDiv>
            <ResultDice onChange={e => setRandomNumber(e.target.value)}>{randomNumber ? randomNumber : "0"}</ResultDice>
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
            <RollHistory>
                {
                    historyRoll.map((history) => (
                        <HistoryResult key={history.id}>
                            {
                                history.result.map((result, i, history) => (
                                    <span key={history.id}>
                                        { i + 1 === history.length ? <span>{result} </span> : <span>{result} + </span>} 
                                        
                                    </span>
                                ))
                            }
                            { history.result[1] ? <span>= {history.sum} </span> : null}
                            (D{history.dice})
                        </HistoryResult>
                    ))
                }
            </RollHistory>
        </DivBackground>
        <TempFooter>
            <TempBtn onClick={ () => history.goBack() }>Revenir sur la page de personnage</TempBtn>
        </TempFooter>
        </>
    );
};


export default RollDice;
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { ExportTempBtn, ExportDivBackground, ExportTempFooter, ExportDice, ExportHistoryResult, ExportResultDice, ExportTitlePage, ExportDiceDiv, ExportRollHistory } from '../style/exportedStyle';

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
        <ExportDivBackground background = {props.background}>
            <ExportTitlePage>Lancé de dés</ExportTitlePage>
            <ExportDiceDiv>
                <ExportDice onClick={decrement}>-</ExportDice>
                <ExportDice>{count}</ExportDice>
                <ExportDice onClick={increment}>+</ExportDice>
            </ExportDiceDiv>
            <ExportResultDice onChange={e => setRandomNumber(e.target.value)}>{randomNumber ? randomNumber : "0"}</ExportResultDice>
            <hr></hr>
            <ExportDiceDiv>
                <ExportDice onClick={() => RollDice(d4) }>{d4}</ExportDice>
                <ExportDice onClick={() => RollDice(d6) }>{d6}</ExportDice>
                <ExportDice onClick={() => RollDice(d8) }>{d8}</ExportDice>
            </ExportDiceDiv>
            <ExportDiceDiv>   
                <ExportDice onClick={() => RollDice(d10) }>{d10}</ExportDice>
                <ExportDice onClick={() => RollDice(d12) }>{d12}</ExportDice>
                <ExportDice onClick={() => RollDice(d20) }>{d20}</ExportDice>
                <ExportDice onClick={() => RollDice(d100) }>{d100}</ExportDice>
            </ExportDiceDiv>
            <ExportRollHistory>
                {
                    historyRoll.map((history) => (
                        <ExportHistoryResult key={history.id}>
                            {
                                history.result.map((result, i, history) => (
                                    <span key={history.id}>
                                        { i + 1 === history.length ? <span>{result} </span> : <span>{result} + </span>} 
                                        
                                    </span>
                                ))
                            }
                            { history.result[1] ? <span>= {history.sum} </span> : null}
                            (D{history.dice})
                        </ExportHistoryResult>
                    ))
                }
            </ExportRollHistory>
        </ExportDivBackground>
        <ExportTempFooter>
            <ExportTempBtn onClick={ () => history.goBack() }>Revenir sur la page de personnage</ExportTempBtn>
        </ExportTempFooter>
        </>
    );
};


export default RollDice;
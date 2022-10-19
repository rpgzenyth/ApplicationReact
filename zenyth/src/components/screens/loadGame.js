import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ContentDiv, TitleDiv, BtnWhite, Titre, SmallText } from '../style/exportedStyle'

const LoadGame = () => {
    const [results, setResults] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3131/api/v1/gameRooms`,
            headers: {
                "content-type": "application/json",
                "authorization": token
            }
        }).then(function (response) {
            setResults(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    },[])

    return (
        <ContentDiv>
            <TitleDiv>
                {
                    results.map((result) => (
                        <BtnWhite key={result._id}>
                            <Titre>{result.name}</Titre>
                            <SmallText>{result.updateDate}</SmallText>
                        </BtnWhite>
                    ) )
                }
            </TitleDiv>
        </ContentDiv>
    );
};

export default LoadGame;
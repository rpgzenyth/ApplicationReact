import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ExportContentDiv, ExportTitleDiv, ExportBtnWhite, ExportTitre, ExportSmallText } from '../style/exportedStyle'

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
        <ExportContentDiv>
            <ExportTitleDiv>
                {
                    results.map((result) => (
                        <ExportBtnWhite key={result._id}>
                            <ExportTitre>{result.name}</ExportTitre>
                            <ExportSmallText>{result.updateDate}</ExportSmallText>
                        </ExportBtnWhite>
                    ) )
                }
            </ExportTitleDiv>
        </ExportContentDiv>
    );
};

export default LoadGame;
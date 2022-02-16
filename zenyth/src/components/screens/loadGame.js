import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ContentDiv, TitlePage } from '../../config/styled';

const LoadGame = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3131/api/v1/characters`,
        }).then(function (response) {
            setResults(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    },[])

    

    return (
        <ContentDiv className='page'>
            <TitlePage>LoadGame</TitlePage>
            {
                results.map((result) => (
                    <div className="" key={result._id}>
                        {result.firstName} <br />
                        {result.lastName} <br />
                        {result.email}
                    </div>
                ) )
            }
        </ContentDiv>
    );
};

export default LoadGame;
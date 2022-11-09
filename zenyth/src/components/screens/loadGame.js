import React, {useEffect, useState} from 'react';
import { ContentDiv, TitleDiv, BtnWhite, Titre, SmallText } from '../style/exportedStyle'
import { getGamerooms } from '../../hooks/useGameroomData';
import { getToken } from '../../utils/token';

const LoadGame = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {

        const token = getToken();
        
        getGamerooms(token).then((data) => {
            setResults(data);
        });
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
import React, {useEffect, useState} from 'react';
import { ContentDiv, BtnWhite, Titre, SmallText, TitleLegend, DivLegend } from '../style/exportedStyle'
import { getGamerooms } from '../../hooks/useGameroomData';
import { getToken } from '../../utils/token';
import { useNavigate } from 'react-router';

const LoadGame = () => {
    const [results, setResults] = useState([]);
    const history = useNavigate();

    useEffect(() => {

        const token = getToken();
        
        getGamerooms(token).then((data) => {
            setResults(data);
        });
    },[])


    return (
        <ContentDiv>
            <DivLegend>
                <TitleLegend>Liste des parties en cours</TitleLegend>
            </DivLegend>
            <DivLegend>
                {
                    results?.map((result) => (
                        <BtnWhite key={result._id} onClick={ () => history(`/room?id=${result._id}`)}>
                            <Titre>{result.name}</Titre>
                            <SmallText>{result.updateDate}</SmallText>
                        </BtnWhite>
                    ) )
                }
            </DivLegend>
        </ContentDiv>
    );
};

export default LoadGame;
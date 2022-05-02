import React from 'react';
import { ContentDiv, TitleLegend, TitleDiv } from '../../config/styled';

const LoadGame = () => {
    
    return (
        <ContentDiv>
            <TitleDiv>
                <TitleLegend>Vous n'avez aucune partie en cours</TitleLegend>
            </TitleDiv>
        </ContentDiv>
    );
};

export default LoadGame;
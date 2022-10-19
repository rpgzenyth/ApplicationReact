import React from 'react';
import { ExportTitleLegend, ExportContentDiv, ExportTitleDiv } from '../style/exportedStyle'

const LoadGame = () => {
    
    return (
        <ExportContentDiv>
            <ExportTitleDiv>
                <ExportTitleLegend>Vous n'avez aucune partie en cours</ExportTitleLegend>
            </ExportTitleDiv>
        </ExportContentDiv>
    );
};

export default LoadGame;
import React from 'react';
import { useHistory } from 'react-router';
import { ExportBtnBlack, ExportBtnWhite, ExportTitre, ExportSmallText, ExportSubtitleLegend, ExportTitleLegend, ExportContentDiv, ExportTitleDiv } from '../style/exportedStyle';


const NewGame = () => {
    const history = useHistory()

    return (
        <ExportContentDiv>
            <ExportTitleDiv>
                <ExportTitleLegend>Lancer une partie <br /> en tant que</ExportTitleLegend>
            </ExportTitleDiv>

            <ExportBtnWhite onClick={ () => history.push(`/select-character`)}>
                <ExportTitre>Joueur</ExportTitre>
            </ExportBtnWhite>
            <ExportSubtitleLegend>ou</ExportSubtitleLegend>
            <ExportBtnBlack>
                <ExportTitre>Maitre du jeu</ExportTitre>
                <ExportSmallText>en maintenance...</ExportSmallText>
            </ExportBtnBlack>
        </ExportContentDiv>
    );
};

export default NewGame;
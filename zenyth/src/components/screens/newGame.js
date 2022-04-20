import React from 'react';
import { TitleDiv, ContentDiv, TitleLegend, BtnWhite, BtnBlack, Titre, SmallText, SubtitleLegend } from '../../config/styled';
import { useHistory } from 'react-router';

const NewGame = () => {
    const history = useHistory()

    return (
        <ContentDiv>
            <TitleDiv>
                <TitleLegend>Lancer une partie <br /> en tant que</TitleLegend>
            </TitleDiv>

            <BtnWhite onClick={ () => history.push(`/create-character`)}>
                <Titre>Joueur</Titre>
            </BtnWhite>
            <SubtitleLegend>ou</SubtitleLegend>
            <BtnBlack>
                <Titre>Maitre du jeu</Titre>
                <SmallText>en maintenance...</SmallText>
            </BtnBlack>
        </ContentDiv>
    );
};

export default NewGame;
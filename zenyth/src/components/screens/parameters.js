import React from 'react';
import { BigBtn, ContentDiv, DivLegend, TitleLegend } from '../style/exportedStyle';
import { useNavigate } from 'react-router';

const Parameters = () => {

    const history = useNavigate()

    const logout = () => {
        localStorage.removeItem("token");
        history(`/login`);
    }

    return (
        <ContentDiv>
            <DivLegend>
                <TitleLegend>Paramètres</TitleLegend>
            </DivLegend>
            <BigBtn onClick={() => logout()}>Se déconnecter</BigBtn>
        </ContentDiv>
    );
};

export default Parameters;
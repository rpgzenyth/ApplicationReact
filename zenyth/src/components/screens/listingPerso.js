import React from 'react';
import { useHistory } from 'react-router';
import { DivBackground, DivLegend, TitleLegend, SubtitleLegend, DivPerso, PersoName, ClassRace, Listing } from '../../config/styled';
import {VscPersonAdd} from 'react-icons/vsc'

const ListingPerso = props => {
    const history = useHistory()

    return (
        <DivBackground background = {props.background}>
            <DivLegend>
                <TitleLegend>Nom du personnage</TitleLegend>
                <SubtitleLegend>Classe / Race</SubtitleLegend>
                <VscPersonAdd onClick={ () => history.push(`/create-perso`)} size="35px" style= { {position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" , color: 'white' } }></VscPersonAdd>
            </DivLegend>

            {/* Boucle for */}
            <Listing>
                <DivPerso>
                    <PersoName>VENOCKA</PersoName>
                    <ClassRace>Guerrier / Humain</ClassRace>
                </DivPerso>
                <DivPerso>
                    <PersoName>alainproviste</PersoName>
                    <ClassRace>Guerrier / Humain</ClassRace>
                </DivPerso>
                <DivPerso>
                    <PersoName>Makory</PersoName>
                    <ClassRace>Guerrier / Humain</ClassRace>
                </DivPerso>
                <DivPerso>
                    <PersoName>Astyez</PersoName>
                    <ClassRace>Guerrier / Humain</ClassRace>
                </DivPerso>
                <DivPerso>
                    <PersoName>Atypox</PersoName>
                    <ClassRace>Guerrier / Humain</ClassRace>
                </DivPerso>
                <DivPerso>
                    <PersoName>catwoghost</PersoName>
                    <ClassRace>Guerrier / Humain</ClassRace>
                </DivPerso>
            </Listing>
            {/* end for */}

        </DivBackground>
    );
};

export default ListingPerso;
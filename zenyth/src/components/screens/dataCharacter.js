import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import dice from '../../images/dice.png';
import bag from '../../images/bag.png';
import tools from '../../images/tools.png';
import potion from '../../images/potion.png';
import sword from '../../images/sword.png';
import description from '../../images/description.png';
import { ExportStyleFooter, ExportImgBigBtn, ExportLabelForm, ExportFooterDiv, ExportDivBackgroundData, ExportClassRace, ExportDataCharaDiv, ExportDivDataChara, ExportTextDataChara } from '../style/exportedStyle';

const DataCharacter = props => {

    const [character, setCharacter] = useState([]);
    let {id} = useParams();

    // Footer
    const [background, setbackground] = useState('none');
    const [background2, setbackground2] = useState('none');
    const [background3, setbackground3] = useState('none');
    const [background4, setbackground4] = useState('none');
    const [background5, setbackground5] = useState('none');
    const [background6, setbackground6] = useState('none');
    const [chose, setChose] = useState("none");
    

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:3131/api/v1/characters/${id}`,
        }).then(function (response) {
            setCharacter(response.data);
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    },[])


    const ChangeBack = (name, fonction) =>{
        switch (name){
            case 'none':
                setbackground('none')
                setbackground2('none')
                setbackground3('none')
                setbackground4('none')
                setbackground5('none')
                setbackground6('none')
                fonction('white')
                break
            case 'white':
                fonction('none')
                setChose("none")
                break
            default:
                break
        }
    }

    const verifData = (data) =>{

        if(data){
            return data
        }
        else{
            return '-'
        }

    }


    return (
        <>
        <ExportDivBackgroundData background={props.background}>

            { chose === "none" ?

                <div>
                    <div>
                        <ExportLabelForm>Profil</ExportLabelForm>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Nom du personnage : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.name)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Nom du Joueur : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.player)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Classe et Niveau : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.class)}, {verifData(character.level)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Race : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.race)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Experience : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.xp)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Historique : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.history)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Alignement : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.alignement)}</ExportClassRace>
                        </ExportDivDataChara>

                        <br/>

                        <ExportLabelForm>Statistique</ExportLabelForm>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Classe d'armure : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.CA)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Initiative : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.init)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Vitesse : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.speed)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Point de vie actuel : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.HP_now)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Point de vie temporaires : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.HP_temporary)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Sagesse (Perception) passive : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.perception)}</ExportClassRace>
                        </ExportDivDataChara>


                        <br/>

                        <ExportLabelForm>Statistique Principale</ExportLabelForm>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Force : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.force)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Dextérité : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.dexterite)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Constitution : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.constitution)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Intelligence : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.intelligence)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Sagesse : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.sagesse)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Charisme : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.charisme)}</ExportClassRace>
                        </ExportDivDataChara>
                        
                    </div>
                </div>                
                :
                null
            }

            { chose === "dice" ?

                <ExportDataCharaDiv>
                    <div>
                        <ExportLabelForm>Dés de vie</ExportLabelForm>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Dés de vie : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.des_vie)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Jds contre la mort : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.jds_mort)}</ExportClassRace>
                        </ExportDivDataChara>

                        <br/>

                        <ExportLabelForm>Compétences</ExportLabelForm>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Acrobaties (DEX) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.acrobaties)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Arcanes (INT) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.arcanes)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Athlétisme (FOR) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.athletisme)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Discrétion (DEX) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.discretion)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Dressage (SAG) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.dressage)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Excamotage (DEX) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.excamotage)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Histoire (INT) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.histoire)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Intimidation (CHA) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.intimidation)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Investigation (INT) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.investigation)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Médecine (SAG) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.medecine)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Nature (INT) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.nature)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Perception (SAG) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.perception)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Perspicacité (SAG) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.perspicacite)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Persuasion (CHA) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.persuasion)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Religion (INT) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.investigation)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Représentation (CHA) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.representation)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Surive (SAG) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.survie)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Tromperie (CHA) : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.tromperie )}</ExportClassRace>
                        </ExportDivDataChara>

                        <br/>

                        <ExportLabelForm>Jets de sauvegarde</ExportLabelForm>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Force : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.force_save )}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Dextérité : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.dexterite_save)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Constitution : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.constitution_save)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Intelligence : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.intelligence_save)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Sagesse : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.sagesse_save)}</ExportClassRace>
                        </ExportDivDataChara>
                        <ExportDivDataChara>
                            <ExportTextDataChara>Charisme : </ExportTextDataChara>
                            <ExportClassRace>{verifData(character.charisme_save)}</ExportClassRace>
                        </ExportDivDataChara>
                        
                    </div>
                </ExportDataCharaDiv>

                :
                null
            }

            {chose === "bag" ? 

                <div>
                    <div>
                        <ExportLabelForm>Équipement</ExportLabelForm>
                        
                    </div>
                </div>
            
            
            :null}


            {chose === "tools" ? 

            <div>
                <div>
                    <ExportLabelForm>Autre maitrise et langues</ExportLabelForm>
                    
                </div>
            </div>


            :null}


            {chose === "potion" ? 

            <div>
                <div>
                    <ExportLabelForm>Classe de lanceur de sorts</ExportLabelForm>
                    
                </div>
            </div>


            :null}

            {chose === "sword" ? 

            <div>
                <div>
                    <ExportLabelForm>Attaque et sorts</ExportLabelForm>
                    
                </div>
            </div>


            :null}

            {chose === "description" ? 

            <div>
                <div>
                    <ExportLabelForm>Descriptif du personnage</ExportLabelForm>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Trait de personnalité : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.personalite)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Idéaux : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.ideals)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Liens : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.links)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Défauts : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.defauts)}</ExportClassRace>
                    </ExportDivDataChara>

                    <hr/>


                    <ExportDivDataChara>
                        <ExportTextDataChara>Age : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.age)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Taille : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.waist)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Poids : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.weight)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Yeux : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.eyes)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Peau : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.skin)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Cheveux : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.hair)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Défauts : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.defauts)}</ExportClassRace>
                    </ExportDivDataChara>

                    <hr/>

                    <ExportDivDataChara>
                        <ExportTextDataChara>Apparence du personnage : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.apparence)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Histoire du personnage : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.histoire)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Alliés et organisation : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.ally)}, {verifData(character.organisation)}</ExportClassRace>
                    </ExportDivDataChara>
                    <ExportDivDataChara>
                        <ExportTextDataChara>Trésors : </ExportTextDataChara>
                        <ExportClassRace>{verifData(character.tresor)}</ExportClassRace>
                    </ExportDivDataChara>
                </div>
            </div>


            :null}




            </ExportDivBackgroundData>
            <ExportStyleFooter>
                <ExportFooterDiv image={background} onClick={() => {setChose("dice"); ChangeBack(background, setbackground)}}>
                    <ExportImgBigBtn src={dice}></ExportImgBigBtn>
                </ExportFooterDiv>
                <ExportFooterDiv image={background2} onClick={() => {setChose("bag"); ChangeBack(background2, setbackground2)}}>
                    <ExportImgBigBtn src={bag}></ExportImgBigBtn>
                </ExportFooterDiv>
                <ExportFooterDiv image={background3} onClick={() => {setChose("tools"); ChangeBack(background3, setbackground3)}}>
                    <ExportImgBigBtn src={tools}></ExportImgBigBtn>
                </ExportFooterDiv>
                <ExportFooterDiv image={background4} onClick={() => {setChose("potion"); ChangeBack(background4, setbackground4)}}>
                    <ExportImgBigBtn src={potion}></ExportImgBigBtn>
                </ExportFooterDiv>
                <ExportFooterDiv image={background5} onClick={() => {setChose("sword"); ChangeBack(background5, setbackground5)}}>
                    <ExportImgBigBtn src={sword}></ExportImgBigBtn>
                </ExportFooterDiv>
                <ExportFooterDiv image={background6} onClick={() => {setChose("description"); ChangeBack(background6, setbackground6)}}>
                    <ExportImgBigBtn src={description}></ExportImgBigBtn>
                </ExportFooterDiv>
            </ExportStyleFooter>
        </>
    )



};

export default DataCharacter;
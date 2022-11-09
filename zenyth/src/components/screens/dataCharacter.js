import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import dice from '../../images/dice.png';
import bag from '../../images/bag.png';
import tools from '../../images/tools.png';
import potion from '../../images/potion.png';
import sword from '../../images/sword.png';
import description from '../../images/description.png';
import { StyleFooter, ImgBigBtn, LabelForm, FooterDiv, DivBackgroundData, ClassRace, DataCharaDiv, DivDataChara, TextDataChara } from '../style/exportedStyle';
import { getCharacter } from '../../hooks/useCharacterData';

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
        getCharacter(id).then((data) => {
            setCharacter(data);
        });
    }, [id]);


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
        <DivBackgroundData background={props.background}>

            { chose === "none" ?

                <div>
                    <div>
                        <LabelForm>Profil</LabelForm>
                        <DivDataChara>
                            <TextDataChara>Nom du personnage : </TextDataChara>
                            <ClassRace>{verifData(character.name)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Nom du Joueur : </TextDataChara>
                            <ClassRace>{verifData(character.player)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Classe et Niveau : </TextDataChara>
                            <ClassRace>{verifData(character.class)}, {verifData(character.level)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Race : </TextDataChara>
                            <ClassRace>{verifData(character.race)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Experience : </TextDataChara>
                            <ClassRace>{verifData(character.xp)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Historique : </TextDataChara>
                            <ClassRace>{verifData(character.history)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Alignement : </TextDataChara>
                            <ClassRace>{verifData(character.alignement)}</ClassRace>
                        </DivDataChara>

                        <br/>

                        <LabelForm>Statistique</LabelForm>
                        <DivDataChara>
                            <TextDataChara>Classe d'armure : </TextDataChara>
                            <ClassRace>{verifData(character.CA)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Initiative : </TextDataChara>
                            <ClassRace>{verifData(character.init)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Vitesse : </TextDataChara>
                            <ClassRace>{verifData(character.speed)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Point de vie actuel : </TextDataChara>
                            <ClassRace>{verifData(character.HP_now)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Point de vie temporaires : </TextDataChara>
                            <ClassRace>{verifData(character.HP_temporary)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Sagesse (Perception) passive : </TextDataChara>
                            <ClassRace>{verifData(character.perception)}</ClassRace>
                        </DivDataChara>


                        <br/>

                        <LabelForm>Statistique Principale</LabelForm>
                        <DivDataChara>
                            <TextDataChara>Force : </TextDataChara>
                            <ClassRace>{verifData(character.force)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Dextérité : </TextDataChara>
                            <ClassRace>{verifData(character.dexterite)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Constitution : </TextDataChara>
                            <ClassRace>{verifData(character.constitution)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Intelligence : </TextDataChara>
                            <ClassRace>{verifData(character.intelligence)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Sagesse : </TextDataChara>
                            <ClassRace>{verifData(character.sagesse)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Charisme : </TextDataChara>
                            <ClassRace>{verifData(character.charisme)}</ClassRace>
                        </DivDataChara>
                        
                    </div>
                </div>                
                :
                null
            }

            { chose === "dice" ?

                <DataCharaDiv>
                    <div>
                        <LabelForm>Dés de vie</LabelForm>
                        <DivDataChara>
                            <TextDataChara>Dés de vie : </TextDataChara>
                            <ClassRace>{verifData(character.des_vie)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Jds contre la mort : </TextDataChara>
                            <ClassRace>{verifData(character.jds_mort)}</ClassRace>
                        </DivDataChara>

                        <br/>

                        <LabelForm>Compétences</LabelForm>
                        <DivDataChara>
                            <TextDataChara>Acrobaties (DEX) : </TextDataChara>
                            <ClassRace>{verifData(character.acrobaties)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Arcanes (INT) : </TextDataChara>
                            <ClassRace>{verifData(character.arcanes)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Athlétisme (FOR) : </TextDataChara>
                            <ClassRace>{verifData(character.athletisme)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Discrétion (DEX) : </TextDataChara>
                            <ClassRace>{verifData(character.discretion)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Dressage (SAG) : </TextDataChara>
                            <ClassRace>{verifData(character.dressage)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Excamotage (DEX) : </TextDataChara>
                            <ClassRace>{verifData(character.excamotage)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Histoire (INT) : </TextDataChara>
                            <ClassRace>{verifData(character.histoire)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Intimidation (CHA) : </TextDataChara>
                            <ClassRace>{verifData(character.intimidation)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Investigation (INT) : </TextDataChara>
                            <ClassRace>{verifData(character.investigation)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Médecine (SAG) : </TextDataChara>
                            <ClassRace>{verifData(character.medecine)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Nature (INT) : </TextDataChara>
                            <ClassRace>{verifData(character.nature)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Perception (SAG) : </TextDataChara>
                            <ClassRace>{verifData(character.perception)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Perspicacité (SAG) : </TextDataChara>
                            <ClassRace>{verifData(character.perspicacite)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Persuasion (CHA) : </TextDataChara>
                            <ClassRace>{verifData(character.persuasion)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Religion (INT) : </TextDataChara>
                            <ClassRace>{verifData(character.investigation)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Représentation (CHA) : </TextDataChara>
                            <ClassRace>{verifData(character.representation)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Surive (SAG) : </TextDataChara>
                            <ClassRace>{verifData(character.survie)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Tromperie (CHA) : </TextDataChara>
                            <ClassRace>{verifData(character.tromperie )}</ClassRace>
                        </DivDataChara>

                        <br/>

                        <LabelForm>Jets de sauvegarde</LabelForm>
                        <DivDataChara>
                            <TextDataChara>Force : </TextDataChara>
                            <ClassRace>{verifData(character.force_save )}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Dextérité : </TextDataChara>
                            <ClassRace>{verifData(character.dexterite_save)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Constitution : </TextDataChara>
                            <ClassRace>{verifData(character.constitution_save)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Intelligence : </TextDataChara>
                            <ClassRace>{verifData(character.intelligence_save)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Sagesse : </TextDataChara>
                            <ClassRace>{verifData(character.sagesse_save)}</ClassRace>
                        </DivDataChara>
                        <DivDataChara>
                            <TextDataChara>Charisme : </TextDataChara>
                            <ClassRace>{verifData(character.charisme_save)}</ClassRace>
                        </DivDataChara>
                        
                    </div>
                </DataCharaDiv>

                :
                null
            }

            {chose === "bag" ? 

                <div>
                    <div>
                        <LabelForm>Équipement</LabelForm>
                        
                    </div>
                </div>
            
            
            :null}


            {chose === "tools" ? 

            <div>
                <div>
                    <LabelForm>Autre maitrise et langues</LabelForm>
                    
                </div>
            </div>


            :null}


            {chose === "potion" ? 

            <div>
                <div>
                    <LabelForm>Classe de lanceur de sorts</LabelForm>
                    
                </div>
            </div>


            :null}

            {chose === "sword" ? 

            <div>
                <div>
                    <LabelForm>Attaque et sorts</LabelForm>
                    
                </div>
            </div>


            :null}

            {chose === "description" ? 

            <div>
                <div>
                    <LabelForm>Descriptif du personnage</LabelForm>
                    <DivDataChara>
                        <TextDataChara>Trait de personnalité : </TextDataChara>
                        <ClassRace>{verifData(character.personalite)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Idéaux : </TextDataChara>
                        <ClassRace>{verifData(character.ideals)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Liens : </TextDataChara>
                        <ClassRace>{verifData(character.links)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Défauts : </TextDataChara>
                        <ClassRace>{verifData(character.defauts)}</ClassRace>
                    </DivDataChara>

                    <hr/>


                    <DivDataChara>
                        <TextDataChara>Age : </TextDataChara>
                        <ClassRace>{verifData(character.age)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Taille : </TextDataChara>
                        <ClassRace>{verifData(character.waist)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Poids : </TextDataChara>
                        <ClassRace>{verifData(character.weight)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Yeux : </TextDataChara>
                        <ClassRace>{verifData(character.eyes)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Peau : </TextDataChara>
                        <ClassRace>{verifData(character.skin)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Cheveux : </TextDataChara>
                        <ClassRace>{verifData(character.hair)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Défauts : </TextDataChara>
                        <ClassRace>{verifData(character.defauts)}</ClassRace>
                    </DivDataChara>

                    <hr/>

                    <DivDataChara>
                        <TextDataChara>Apparence du personnage : </TextDataChara>
                        <ClassRace>{verifData(character.apparence)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Histoire du personnage : </TextDataChara>
                        <ClassRace>{verifData(character.histoire)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Alliés et organisation : </TextDataChara>
                        <ClassRace>{verifData(character.ally)}, {verifData(character.organisation)}</ClassRace>
                    </DivDataChara>
                    <DivDataChara>
                        <TextDataChara>Trésors : </TextDataChara>
                        <ClassRace>{verifData(character.tresor)}</ClassRace>
                    </DivDataChara>
                </div>
            </div>


            :null}




            </DivBackgroundData>
            <StyleFooter>
                <FooterDiv image={background} onClick={() => {setChose("dice"); ChangeBack(background, setbackground)}}>
                    <ImgBigBtn src={dice}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background2} onClick={() => {setChose("bag"); ChangeBack(background2, setbackground2)}}>
                    <ImgBigBtn src={bag}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background3} onClick={() => {setChose("tools"); ChangeBack(background3, setbackground3)}}>
                    <ImgBigBtn src={tools}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background4} onClick={() => {setChose("potion"); ChangeBack(background4, setbackground4)}}>
                    <ImgBigBtn src={potion}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background5} onClick={() => {setChose("sword"); ChangeBack(background5, setbackground5)}}>
                    <ImgBigBtn src={sword}></ImgBigBtn>
                </FooterDiv>
                <FooterDiv image={background6} onClick={() => {setChose("description"); ChangeBack(background6, setbackground6)}}>
                    <ImgBigBtn src={description}></ImgBigBtn>
                </FooterDiv>
            </StyleFooter>
        </>
    )



};

export default DataCharacter;
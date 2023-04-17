import { ClassRace, DataCharaDiv, DivBackgroundData, DivDataChara, FooterDiv, ImgBigBtn, LabelForm, StyleFooter, TextDataChara } from "../style/exportedStyle";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCharacter } from "../../hooks/useCharacterData";
import { useParams } from "react-router";
import dice from "../../images/dice.png";
import bag from "../../images/bag.png";
import tools from "../../images/tools.png";
import potion from "../../images/potion.png";
import sword from "../../images/sword.png";
import description from "../../images/description.png";

const Chat = (props) => {

  const [character, setCharacter] = useState([]);
  let { id } = useParams();
  // Footer
  const [background, setbackground] = useState("none");
  const [background2, setbackground2] = useState("none");
  const [background3, setbackground3] = useState("none");
  const [background4, setbackground4] = useState("none");
  const [background5, setbackground5] = useState("none");
  const [background6, setbackground6] = useState("none");
  const [choose, setChoose] = useState("ChatGroupe");

  useEffect(() => {
    getCharacter(id).then((data) => {
      setCharacter(data);
    });
  }, [id]);

  const ChangeBack = (name, fonction) => {
    switch (name) {
      case "none":
        setbackground("none");
        setbackground2("none");
        setbackground3("none");
        setbackground4("none");
        setbackground5("none");
        setbackground6("none");
        fonction("white");
        break;
      case "white":
        fonction("none");
        setChoose("none");
        break;
      default:
        break;
    }
  };

  const verifData = (data) => {
    if (data) {
      return data;
    } else {
      return "-";
    }
  };


  const [text, setText] = useState("");
  const [privateText, setPrivateText] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [showPrivateChat, setShowPrivateChat] = useState(false);

  useEffect(() => {
    setShowChat(true);
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleChatClick = () => {
    setShowChat(true);
    setShowPrivateChat(false)
  };
  const handlePrivateInputChange = (event) => {
    setPrivateText(event.target.value);
  };
  const handlePrivateChatClick = () => {
    setShowPrivateChat(true);
    setShowChat(false)
  };

  return (
    <>
      <DivBackgroundData background={props.background}>
        {choose === "ChatGroupe" ? (
          <>
            <Groupe>
              <ChatGroupe onClick={handleChatClick}>Groupe</ChatGroupe>
              <ChatPrive onClick={handlePrivateChatClick}>Chat Privé</ChatPrive>
            </Groupe><RectangleWrapper>
                {showChat && (
                  <Rectangle>
                    <TextAreaStyled
                      value={text}
                      onChange={handleInputChange}
                      rows="5"
                      cols="50"
                      placeholder="Ecrire un message" />
                  </Rectangle>
                )}
                {showPrivateChat && (
                  <RectanglePrivate>
                    <TextAreaStyled
                      value={privateText}
                      onChange={handlePrivateInputChange}
                      rows="5"
                      cols="50"
                      placeholder="Ecrire un message privé" />
                  </RectanglePrivate>
                )}
              </RectangleWrapper></>
          ) : null}
        {choose === "dice" ? (
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
              <br />
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
              <ClassRace>{verifData(character.tromperie)}</ClassRace>
            </DivDataChara>
            <br />
            <LabelForm>Jets de sauvegarde</LabelForm>
            <DivDataChara>
              <TextDataChara>Force : </TextDataChara>
              <ClassRace>{verifData(character.force_save)}</ClassRace>
            </DivDataChara>
            <DivDataChara>
              <TextDataChara>Dextérité : </TextDataChara>
              <ClassRace>{verifData(character.dexterite_save)}</ClassRace>
            </DivDataChara>
            <DivDataChara>
              <TextDataChara>Constitution : </TextDataChara>
              <ClassRace>
                {verifData(character.constitution_save)}
              </ClassRace>
            </DivDataChara>
            <DivDataChara>
              <TextDataChara>Intelligence : </TextDataChara>
              <ClassRace>
                {verifData(character.intelligence_save)}
              </ClassRace>
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
      ) : null}

      {choose === "bag" ? (
        <div>
          <div>
            <LabelForm>Équipement</LabelForm>
          </div>
        </div>
      ) : null}

      {choose === "tools" ? (
        <div>
          <div>
            <LabelForm>Autre maitrise et langues</LabelForm>
          </div>
        </div>
      ) : null}

      {choose === "potion" ? (
        <div>
          <div>
            <LabelForm>Classe de lanceur de sorts</LabelForm>
          </div>
        </div>
      ) : null}

      {choose === "sword" ? (
        <div>
          <div>
            <LabelForm>Attaque et sorts</LabelForm>
          </div>
        </div>
      ) : null}

      {choose === "description" ? (
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

            <hr />

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

            <hr />

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
              <ClassRace>
                {verifData(character.ally)},{" "}
                {verifData(character.organisation)}
              </ClassRace>
            </DivDataChara>
            <DivDataChara>
              <TextDataChara>Trésors : </TextDataChara>
              <ClassRace>{verifData(character.tresor)}</ClassRace>
            </DivDataChara>
          </div>
        </div>
      ) : null}
    </DivBackgroundData>
      <StyleFooter>
        <FooterDiv image={background} onClick={() => {setChoose("dice"); ChangeBack(background, setbackground)}}>
          <ImgBigBtn src={dice}></ImgBigBtn>
        </FooterDiv>
        <FooterDiv image={background2} onClick={() => {setChoose("bag"); ChangeBack(background2, setbackground2)}}>
            <ImgBigBtn src={bag}></ImgBigBtn>
        </FooterDiv>
        <FooterDiv image={background3} onClick={() => {setChoose("tools"); ChangeBack(background3, setbackground3)}}>
            <ImgBigBtn src={tools}></ImgBigBtn>
        </FooterDiv>
        <FooterDiv image={background4} onClick={() => {setChoose("potion"); ChangeBack(background4, setbackground4)}}>
            <ImgBigBtn src={potion}></ImgBigBtn>
        </FooterDiv>
        <FooterDiv image={background5} onClick={() => {setChoose("sword"); ChangeBack(background5, setbackground5)}}>
            <ImgBigBtn src={sword}></ImgBigBtn>
        </FooterDiv>
        <FooterDiv image={background6} onClick={() => {setChoose("description"); ChangeBack(background6, setbackground6)}}>
            <ImgBigBtn src={description}></ImgBigBtn>
        </FooterDiv>
      </StyleFooter>
    </>
  );
};

const Groupe = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const ChatGroupe = styled.div`
  width: 20%;
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  padding: 5px;
  margin-top: 5%;
  text-align: center;

  &:hover {
    background: white;
    color: black;
  }

  &:active {
    background: white;
    color: black;
  }
`;
const ChatPrive = styled.div`
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  padding: 5px;
  margin-top: 5%;
  margin-left: 2%;
  text-align: center;

  &:hover {
    background: white;
    color: black;
  }

  &:active {
    background: white;
    color: black;
  }
`;
const RectangleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
`;
const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: black;
  border: 1px solid white;
  border-radius: 0 10px 10px 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  position: absolute;
`;
const RectanglePrivate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: black;
  border: 1px solid white;
  border-radius: 0 10px 10px 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  position: absolute;
`;
const TextAreaStyled = styled.textarea`
  width: 90%;
  height: 25px;
  position: absolute;
  bottom: 15px;
  resize: none;
`;

export default Chat;

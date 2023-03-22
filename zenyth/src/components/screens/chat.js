import { DivBackgroundData } from "../style/exportedStyle";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Chat = (props) => {
  const [text, setText] = useState("");
  const [privateText, setPrivateText] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [showPrivateChat, setShowPrivateChat] = useState(false);

  React.useEffect(() => {
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
        <Groupe>
          <ChatGroupe onClick={handleChatClick}>Groupe</ChatGroupe>
          <ChatPrive onClick={handlePrivateChatClick}>Chat Privé</ChatPrive>
        </Groupe>
        <RectangleWrapper>
          {showChat && (
            <Rectangle>
              <TextAreaStyled
                value={text}
                onChange={handleInputChange}
                rows="5"
                cols="50"
                placeholder="Ecrire un message"
              />
            </Rectangle>
          )}
          {showPrivateChat && (
            <RectanglePrivate>
              <TextAreaStyled
                value={privateText}
                onChange={handlePrivateInputChange}
                rows="5"
                cols="50"
                placeholder="Ecrire un message privé"
              />
            </RectanglePrivate>
          )}
        </RectangleWrapper>
      </DivBackgroundData>
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

import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Btn,
  LabelForm,
  TitleForm,
  TitleLegend,
  InputStyled,
  ContentDiv,
} from "../style/exportedStyle";
import { register } from "../../hooks/usePlayerData";
import { setToken } from "../../utils/token";

const Register = () => {
  const [player, setPlayer] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    register(player)
      .then((data) => {
        if(!data){
            setErrorMessage("Une erreur est survenue lors de la création du compte !")
        }
        else if(data.error) {
          setErrorMessage("Le mot de passe doit contenir une majuscule, une miniscule, un chiffre et un caractère spécial et doit comporter 6 caractères minimum.");
        }
        else {
            setToken(data.token);
            history("/menu");
        }
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <ContentDiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TitleForm>Créer un compte</TitleForm>
        <div>
          <LabelForm>FirstName</LabelForm>
          <InputStyled
            onChange={(e) => {
              setPlayer({ ...player, firstName: e.target.value });
            }}
            name="firstname"
          ></InputStyled>
        </div>

        <div>
          <LabelForm>LastName</LabelForm>
          <InputStyled
            onChange={(e) => {
              setPlayer({ ...player, lastName: e.target.value });
            }}
            name="lastname"
          ></InputStyled>
        </div>

        <div>
          <LabelForm>Adresse mail</LabelForm>
          <InputStyled
            onChange={(e) => {
              setPlayer({ ...player, email: e.target.value });
            }}
            name="email"
          ></InputStyled>
        </div>

        <div>
          <LabelForm>Mot de passe</LabelForm>
          <InputStyled
            onChange={(e) => {
              setPlayer({ ...player, password: e.target.value });
            }}
            name="password"
            type="password"
          ></InputStyled>
        </div>

        {!errorMessage ? (
          ""
        ) : (
          <div>
            <TitleLegend>{errorMessage}</TitleLegend>
          </div>
        )}

        <Btn type="submit">
          Créer
        </Btn>
      </form>
    </ContentDiv>
  );
};

export default Register;

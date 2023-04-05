import { useState } from "react"
import { useNavigate } from 'react-router';
import { Btn, LabelForm, TitleForm, TitleLegend, InputStyled, ContentDiv } from "../style/exportedStyle";
import { login } from "../../hooks/usePlayerData";
import { setToken } from "../../utils/token";

const Login = () => {
    
  const [player, setPlayer] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(player).then((data) => {
      setToken(data.token);
      history('/menu');
    }).catch((error) => {
      setErrorMessage(error.response.data.message);
    });
  }

  return(
    <ContentDiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TitleForm>Connexion</TitleForm>

        <div>
          <LabelForm>Adresse mail</LabelForm>
          <InputStyled
            onChange={(e) => { setPlayer({ ...player, email: e.target.value }) }}
            name='email'
          ></InputStyled>
        </div>

        <div>
          <LabelForm>Mot de passe</LabelForm>
          <InputStyled
            onChange={(e) => { setPlayer({ ...player, password: e.target.value }) }}
            name='password'
            type='password'
          ></InputStyled>
        </div>

        { !errorMessage ?
        ""
        :
        <div>
          <TitleLegend>
            {errorMessage}
          </TitleLegend>
        </div>  
      }

        <Btn type='submit'>Se connecter</Btn>
        <Btn type='submit' onClick={ () => history('/register')}>Créer un compte</Btn>
      </form>
    </ContentDiv>
  )

}

export default Login
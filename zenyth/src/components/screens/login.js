import { useState } from "react"
import axios from "axios";
import { useHistory } from 'react-router';
import { ExportBtn, ExportLabelForm, ExportTitleForm, ExportTitleLegend, ExportInputStyle, ExportContentDiv } from "../style/exportedStyle";

const Login = () => {
    
  const [player, setPlayer] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `http://localhost:3131/api/v1/login`,
      data: player
    }).then(function (response) {
        localStorage.setItem('token', response.data.token);
        history.push('/menu');
    }).catch(function (error) {
        setErrorMessage(error.response.data.message);
        console.log(errorMessage);
    })
  }

  return(
    <ExportContentDiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ExportTitleForm>Connexion</ExportTitleForm>

        <div>
          <ExportLabelForm>Adresse mail</ExportLabelForm>
          <ExportInputStyle
            onChange={(e) => { setPlayer({ ...player, email: e.target.value }) }}
            name='email'
          ></ExportInputStyle>
        </div>

        <div>
          <ExportLabelForm>Mot de passe</ExportLabelForm>
          <ExportInputStyle
            onChange={(e) => { setPlayer({ ...player, password: e.target.value }) }}
            name='password'
            type='password'
          ></ExportInputStyle>
        </div>

        { !errorMessage ?
        ""
        :
        <div>
          <ExportTitleLegend>
            {errorMessage}
          </ExportTitleLegend>
        </div>  
      }

        <ExportBtn type='submit'>Se connecter</ExportBtn>
      </form>
    </ExportContentDiv>
  )

}

export default Login
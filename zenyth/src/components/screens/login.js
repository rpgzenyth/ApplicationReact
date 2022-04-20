import { useEffect, useState } from "react"
import { ContentDiv, InputStyled, LabelForm, TitleForm, Btn, TitleLegend } from '../../config/styled';
import axios from "axios";
import { useHistory } from 'react-router';

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
    <ContentDiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TitleForm>Login</TitleForm>

        <div>
          <LabelForm>Email</LabelForm>
          <InputStyled
            onChange={(e) => { setPlayer({ ...player, email: e.target.value }) }}
            name='email'
          ></InputStyled>
        </div>

        <div>
          <LabelForm>Password</LabelForm>
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

        <Btn type='submit'>Login</Btn>
      </form>
    </ContentDiv>
  )

}

export default Login
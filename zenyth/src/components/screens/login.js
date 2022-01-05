import { useEffect } from "react"
import { ContentDiv } from '../../config/styled';

const Login = () => {
    

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <ContentDiv>
            <p>Login</p>
        </ContentDiv>
    )

}

export default Login
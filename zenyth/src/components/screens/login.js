import { useEffect } from "react"

const Login = () => {
    

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <div>
            <p>Login</p>
        </div>
    )

}

export default Login
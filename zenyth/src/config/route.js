import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Header from "../components/header";
import Login from "../components/screens/login";
import GlobalStyle from "./globalStyle";


const Routes = () => {
    return(
    <Router>
        <GlobalStyle/>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Login></Login>
            </Route>
            <Redirect to="/" ></Redirect>
        </Switch>
    </Router>
    )
}


export default Routes
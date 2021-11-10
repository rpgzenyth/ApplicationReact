import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Header from "../components/header";
import Home from "../components/screens/home";
import Login from "../components/screens/login";
import GlobalStyle from "./globalStyle";


const Routes = () => {
    return(
    <Router>
        <GlobalStyle/>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/login">
                <Login></Login>
            </Route>
            <Redirect to="/"/>
        </Switch>
    </Router>
    )
}


export default Routes
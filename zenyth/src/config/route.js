import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/screens/home";
import LoadGame from "../components/screens/loadGame";
import Login from "../components/screens/login";
import NewGame from "../components/screens/newGame";
import Parameters from "../components/screens/parameters";
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
            <Route exact path="/new-game">
                <NewGame></NewGame>
            </Route>
            <Route exact path="/load-game">
                <LoadGame></LoadGame>
            </Route>
            <Route exact path="/parameters">
                <Parameters></Parameters>
            </Route>
            <Redirect to="/"/>
        </Switch>
        <Footer/>
    </Router>
    )
}


export default Routes
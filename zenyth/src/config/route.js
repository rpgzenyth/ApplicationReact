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
import ListingPerso from "../components/screens/listingPerso";
import Login from "../components/screens/login";
import NewGame from "../components/screens/newGame";
import Parameters from "../components/screens/parameters";
import GlobalStyle from "./globalStyle";
import CreatePerso from "../components/screens/createPerso";
import RollDice from "../components/screens/rollDice";
import dark from "../images/background_dragon_blur.png"


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
            <Route exact path="/listing-perso">
                <ListingPerso background={dark}></ListingPerso>
                <Footer/>
            </Route>
            <Route exact path="/parameters">
                <Parameters></Parameters>
            </Route>
            <Route exact path="/create-perso">
                <CreatePerso background={dark}></CreatePerso>
            </Route>
            <Route exact path="/roll-dice">
                <RollDice background={dark}></RollDice>
            </Route>
            <Redirect to="/"/>
        </Switch>
        
    </Router>
    )
}


export default Routes
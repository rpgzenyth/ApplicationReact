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
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/login">
                <Header Back="true" />
                <Login></Login>
            </Route>
            <Route exact path="/new-game">
                <Header Back="true" />
                <NewGame></NewGame>
            </Route>
            <Route exact path="/load-game">
                <Header Back="true" />
                <LoadGame></LoadGame>
            </Route>
            <Route exact path="/listing-perso">
                <Header Back="true" />

                <ListingPerso background={dark}></ListingPerso>
                <Footer/>

            </Route>
            <Route exact path="/parameters">
                <Header Back="true" />
                <Parameters></Parameters>
            </Route>
            <Route exact path="/create-perso">
                <Header Param="true" Burger="true" />
                <CreatePerso background={dark}></CreatePerso>
            </Route>
            <Route exact path="/roll-dice">
                <Header Param="true" Burger="true" />
                <RollDice background={dark}></RollDice>

            </Route>
            <Redirect to="/"/>
        </Switch>
        
    </Router>
    )
}


export default Routes
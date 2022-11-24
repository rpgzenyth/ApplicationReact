import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Header from "../components/header";
// import Footer from "../components/footer";
import Home from "../components/screens/home";
import LoadGame from "../components/screens/loadGame";
import ListingCharacter from "../components/screens/listingCharacter";
import Login from "../components/screens/login";
import NewGame from "../components/screens/newGame";
import SelectCharacter from "../components/screens/selectCharacter";
import Parameters from "../components/screens/parameters";
import CreateCharacter from "../components/screens/createCharacter";
import UpdateCharacter from "../components/screens/updateCharacter";
import DataCharacter from "../components/screens/dataCharacter";
import BackgroundBlack from "../images/background_dark.png"
import JoinRoom from "../components/screens/joinRoom";

import RollDice from "../components/screens/rollDice";
import dark from "../images/background_dragon_blur.png"


const Routes = () => {
    return(
    <Router>
        
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
            <Route exact path="/select-character">
                <Header Back="true" />
                <SelectCharacter></SelectCharacter>
            </Route>
            <Route exact path="/load-game">
                <Header Back="true" />
                <LoadGame></LoadGame>
            </Route>
            <Route exact path="/join-room">
                <Header Back="true" />
                <JoinRoom></JoinRoom>
            </Route>
            <Route exact path="/listing-character">
                <Header Back="true" />
                <ListingCharacter background={dark}></ListingCharacter>
            </Route>
            <Route exact path="/parameters">
                <Header Back="true" />
                <Parameters></Parameters>
            </Route>
            <Route exact path="/create-character">
                <Header Param="true" Back="true" />
                <CreateCharacter background={dark}></CreateCharacter>
            </Route>
            <Route exact path="/roll-dice">
                <Header Param="true" Burger="true" />
                <RollDice background={dark}></RollDice>
            </Route>
            <Route exact path="/update-character/:id">
                <Header Param="true" Back="true" />
                <UpdateCharacter background={dark}></UpdateCharacter>
            </Route>
            <Route exact path="/data-character/:id">
                <Header Param="true" Burger="true" />
                <DataCharacter background={BackgroundBlack}></DataCharacter>
            </Route>
            <Redirect to="/"/>
        </Switch>
    </Router>
    )
}


export default Routes
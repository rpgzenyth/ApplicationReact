import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Header from "../components/header";
import Login from "../components/screens/login";


const Routes = () => {
    return(
    <Router>
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
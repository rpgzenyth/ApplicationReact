import Header from "../components/header";
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

import RollDice from "../components/screens/rollDice";
import dark from "../images/background_dragon_blur.png"
import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/login',
        element:(
        <>
            <Header Back="true"/>
            <Login/>
        </>
        )
    },
    {
        path: "/new-game",
        element: (
            <>
                <Header Back="true" />
                <NewGame/>
            </>
        )

    },
    {
        path: "/select-character",
        element: (
            <>
                <Header Back="true" />
                <SelectCharacter/>
            </>
        )
    },
    {
        path: "/load-game",
        element: (
            <>
                <Header Back="true" />
                <LoadGame/>
            </>
        )
    },
    {
        path: "/listing-character",
        element: (
            <>
                <Header Back="true" />
                <ListingCharacter background={dark} />
            </>
        )
    },
    {
        path: "/parameters",
        element: (
            <>
                <Header Back="true" />
                <Parameters/>
            </>
        )
    },
    {
        path: "/create-character",
        element: (
            <>
                <Header Param="true" Back="true" />
                <CreateCharacter background={dark} />
            </>
        )
    },
    {
        path: "/roll-dice",
        element: (
            <>
                <Header Param="true" Burger="true" />
                <RollDice background={dark}/>
            </>
        )
    },
    {
        path: "/update-character/:id",
        element: (
            <>
                <Header Param="true" Back="true" />
                <UpdateCharacter background={dark}/>
            </>
        )
    },
    {
        path: '/data-character/:id',
        element: (
            <>
                <Header Param="true" Burger="true" />
                <DataCharacter background={BackgroundBlack}/>
            </>
        )
    },
    {
        path: "*",
        element: <Navigate to="/" replace />
    }
])
            


export default Routes
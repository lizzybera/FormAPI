import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/build/LayOut";
import LandingPage from "../pages/landingPage";
import HomePage from "../pages/HomePage";
import Register from "../pages/auth/Register";

export const mainRouter = createBrowserRouter([
    {
        path : "/",
        element : <LayOut />,
        children : [
            {
                index : true,
                element : <LandingPage />
            },
            {
                path : "/home",
                element : <HomePage />
            },
        ]
    },
    {
        path : "/reg",
        element : <Register />
    }
])
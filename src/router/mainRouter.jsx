import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/common/LayOut";
import LandingPage from "../pages/landingPage";
import HomePage from "../pages/HomePage";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import PrivateRouter from "./privateRouter";
// import Error from "../error/error";

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
                element : 
                <PrivateRouter>
                <HomePage />
                </PrivateRouter>
            },
        ]
    },
    {
        path : "/reg",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
    // {
    //     path : "*",
    //     element : <Error />
    // },
])
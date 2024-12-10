import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/signin',
            element: <Login></Login>
         },
         {
            path: '/signUp',
            element: <SignUp></SignUp>
         }
        ]
    },
]);

export default router
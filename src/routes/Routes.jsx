import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp";
import BookService from "../pages/shaired/BookService/BookService";
import Bookings from "../pages/bookings/Bookings";
import PrivateRout from "./PrivateRout";

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
         },
         {
            path: '/book/:id',
            element: <PrivateRout><BookService></BookService></PrivateRout>,
            loader: ({ params }) => fetch(`https://cardoctor-bdserver-delta.vercel.app//services/${params.id}`)
         },
         {
            path: '/bookings',
            element: <PrivateRout><Bookings></Bookings></PrivateRout>
         }
      ]
   },
]);

export default router
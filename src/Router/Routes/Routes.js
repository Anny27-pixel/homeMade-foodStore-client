import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/ServiceDetails/MyReviews/MyReviews";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },



        ]
    }
]);
export default router;
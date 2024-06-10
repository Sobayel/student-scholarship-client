import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ScholarshipDetails from "../pages/Home/TopScholarship/ScholarshipDetails";
import PrivateRoute from "./PrivateRoute";
import AllScholarship from "../pages/AllScholarship/AllScholarship";
import ApplyScholarshipForm from "../pages/Home/TopScholarship/ApplyScholarshipForm";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/scholarshipDetails/:id',
          element: <PrivateRoute>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivateRoute>,
        },
        {
          path: '/allScholarship',
          element: <AllScholarship></AllScholarship>,
          loader: () => fetch('http://localhost:9000/scholarshipCount')
        },
        {
          path: '/applyScholarshipForm',
          element:<ApplyScholarshipForm></ApplyScholarshipForm>,
        }
    ]
    },
    { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children: [],
  }
  ]);
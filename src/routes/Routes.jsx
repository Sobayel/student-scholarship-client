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
import MyProfile from "../pages/Dashboard/Common/MyProfile";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import MyReview from "../pages/Dashboard/UserDashboard/MyReview";
import AddScholarship from "../pages/Dashboard/ModeratorDashboard/AddScholarship";
import ManageScholarship from "../pages/Dashboard/Common/ManageScholarship";
import UpdateItem from "../pages/Dashboard/ModeratorDashboard/UpdateItem";

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
        // {
        //   path: '/applyScholarshipForm',
        //   element:<ApplyScholarshipForm></ApplyScholarshipForm>,
        // },
        {
          path:'applyScholarshipForm/:id',
          element:<ApplyScholarshipForm></ApplyScholarshipForm>
        },
    ]
    },
    { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children: [
      {
        path:'myProfile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'review',
        element:<MyReview></MyReview>
      },
      // admin
      {
        path:'manageUsers',
        element:<ManageUsers></ManageUsers>
      },
      {
        path:'addScholarship',
        element:<AddScholarship></AddScholarship>
      },
      {
        path:'manageScholarship',
        element:<ManageScholarship></ManageScholarship>
      },
      {
        path: 'updateItem/:id',
        element: <UpdateItem></UpdateItem>,
        loader: ({params}) => fetch(`http://localhost:9000/scholarship/${params.id}`)
    },
      
    ],
  }
  ]);
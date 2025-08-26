import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";

import Home from "../Home";

import { WeatherDashboard } from "../weather-dashboard";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Dashboard from "../dashboard";
import VoiceAssistant from "../voice-assistance";


  
  
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'signin',
            element:<Signin></Signin>
        },
        {
            path:'signup',
            element:<Signup></Signup>
        },
        {
            path:'weatherdashboard',
            element:<WeatherDashboard></WeatherDashboard>
        },
        {
            path:'dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'dashboard/aibot',
            element:<VoiceAssistant></VoiceAssistant>
        },
        // {
        //     path:'login',
        //     element:<Login></Login>
        // },
        {
            path:'/',
            element:<Home></Home>
        },
        // {
        //     path:'booking',
        //     element:<UserRoute><BookParcelForm></BookParcelForm></UserRoute>
        // },
        // {
        //     path:'contact',
        //     element:<ContactPage></ContactPage>
        // },
        // {
        //     path:'about',
        //     element:<AboutPage></AboutPage>
        // },
        // {
        //     path:'myparcel',
        //     element:<UserRoute><Myparcel></Myparcel></UserRoute>
        // },
        // {
        //     path:'/updatepage/:id',
        //     element:<UserRoute><UpdateParcel></UpdateParcel></UserRoute>
        // },

        // {
        //     path:'myprofile',
        //     element:<UserRoute><UserProfile></UserProfile></UserRoute>
        // },
        // {
        //     path:'users',
        //     element:<Adminroute><Allusers></Allusers></Adminroute>
        // },
        // {
        //     path:'driver',
        //     element:<Adminroute><AllDriver></AllDriver></Adminroute>
        // },
        // {
        //     path:'allparcel',
        //     element:<Adminroute><Allparcel></Allparcel></Adminroute>
        // },
        // {
        //     path:'adminstatistics',
        //     element:<Adminroute><Adminstatistics></Adminstatistics></Adminroute>
        // },
        // {
        //     path:'alldeliveredparcel',
        //     element:<Driverroute><Alldeliveredparcel></Alldeliveredparcel></Driverroute>
        // },
        // {
        //     path:'myreviews',
        //     element:<Driverroute><MyReviews></MyReviews></Driverroute>
        // },
        // {
        //     path:"parcel/:id",
        //     element:<ParcelDetails></ParcelDetails>
        // },
        
      ]
    }
    // ,
    // {
    //     path:'dashboard',
    //     element:<Dahsboard></Dahsboard>,
    //     children:[

    //     {
    //         path:'users',
    //         element:<Adminroute><Allusers></Allusers></Adminroute>
    //     },
        
    //     {
    //         path:'booking',
    //         element:<BookParcelForm></BookParcelForm>
    //     },
    //     {
    //         path:'myparcel',
    //         element:<UserRoute><Myparcel></Myparcel></UserRoute>
    //     },
    //     {
    //         path:'updatepage/:id',
    //         element:<UserRoute><UpdateParcel></UpdateParcel></UserRoute>
    //     },
    //     {
    //         path:'myprofile',
    //         element:<UserRoute><UserProfile></UserProfile></UserRoute>
    //     },
    //     {
    //         path:'driver',
    //         element:<Adminroute><AllDriver></AllDriver></Adminroute>
    //     },
    //     {
    //         path:'allparcel',
    //         element:<Adminroute><Allparcel></Allparcel></Adminroute>
    //     },
    //     {
    //         path:'adminstatistics',
    //         element:<Adminroute><Adminstatistics></Adminstatistics></Adminroute>
    //     },
    //     {
    //         path:'alldeliveredparcel',
    //         element:<Driverroute><Alldeliveredparcel></Alldeliveredparcel></Driverroute>
    //     },
        
    //     {
    //         path:'myreviews',
    //         element:<Driverroute><MyReviews></MyReviews></Driverroute>
    //     },
    // ]
    // }
  ]);
  
  export default router;
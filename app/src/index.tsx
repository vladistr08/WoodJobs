import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './components/css/main.css';
import App from './App';
import SignIn from "./page-components/SignIn";
import SignUp from "./page-components/SignUp";
import Home from './page-components/Home'
import FindJob from './page-components/FindJobs'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/signin",
        element: <SignIn/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/home/find-jobs",
        element: <FindJob/>
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

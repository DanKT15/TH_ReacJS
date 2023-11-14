import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import AppAdmin from '../compoment/Admin/AppAdmin';
import Login from '../compoment/Admin/Login';

const router = createBrowserRouter([
  {
    path: "admin",
    element: <AppAdmin/>,
    children:[
      {
        index: true,
        element: <h1>hello</h1>,
      },
      {
        path: "login-admin",
        element: <Login/>,
      },
    ]
  },
  {
    path: "*",
    element: <h1>Not Found Page !!!</h1>,
  },
]);

export default router;
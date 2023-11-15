import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import AppAdmin from '../compoment/Admin/AppAdmin';
import Login from '../compoment/Admin/Login';


import App from '../compoment/App';
import Test from '../compoment/Test';
import NewsDetail from '../compoment/User/Main/NewsDetail';

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
    path: "/",
    element: <App/>,
    children:[
      {
        
        index: true,
        // element: <h1>hello</h1>,
      },
      {
        // Thêm một route cụ thể cho đường dẫn /api/news/:id
        path: "api/post/:id",
        element: <NewsDetail />,
      },

    ]
  },
  
  {
    path: "*",
    element: <h1>Not Found Page !!!</h1>,
  },
]);

export default router;
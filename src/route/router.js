import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import AppAdmin from '../compoment/Admin/AppAdmin';
import Login from '../compoment/Admin/Login';
import ListUser from "../compoment/Admin/user/ListUser";
import UpdataUser from "../compoment/Admin/user/UpdataUser";
import AddUser from "../compoment/Admin/user/AddUser";


import App from '../compoment/App';
import NewsDetail from '../compoment/User/Main/NewsDetail';
import PostFromNew from '../compoment/User/Main/PostFromNew';
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
      {
        path: "list_user",
        element: <ListUser/>,
      },
      {
        path: "add_user",
        element: <AddUser/>,
      },
      {
        path: "updata_user/:username",
        element: <UpdataUser/>,
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
      {
        // Thêm một route cụ thể cho đường dẫn /api/news/:id
        path: "api/news/:id",
        element: <PostFromNew />,
      },

    ]
  },
  
  {
    path: "*",
    element: <h1>Not Found Page !!!</h1>,
  },
]);

export default router;
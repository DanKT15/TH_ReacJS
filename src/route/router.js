import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import AppAdmin from '../compoment/Admin/AppAdmin';
import Login from '../compoment/Admin/Login';
import ListUser from "../compoment/Admin/user/ListUser";
import UpdataUser from "../compoment/Admin/user/UpdataUser";
import AddUser from "../compoment/Admin/user/AddUser";

import AddPost from "../compoment/Admin/post/AddPost";
import ListPost from "../compoment/Admin/post/ListPost";
import UpdataPost from "../compoment/Admin/post/UpdataPost";


import ListNews from '../compoment/Admin/news/List';
import AddNew from '../compoment/Admin/news/Add';

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
        element: <ListUser/>,
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
      {
        path: "add_post",
        element: <AddPost/>,
      },
      {
        path: "list_post",
        element: <ListPost/>,
      },
      {
        path: "updata_post/:id",
        element: <UpdataPost/>,
      },
      {
        path: "list_news",
        element: <ListNews/>,
      },
      {
        path: "add_new",
        element: <AddNew/>,
      },
    ]
  },
  //USER 
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
        path: "post/:id",
        element: <NewsDetail />,
      },
      {
        // Thêm một route cụ thể cho đường dẫn /api/news/:id
        path: "news/:id",
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
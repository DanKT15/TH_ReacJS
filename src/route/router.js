import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import App from '../compoment/App';
import Test from '../compoment/Test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <h1>hello</h1>,
      },
      {
        path: "test",
        element: <Test/>,
      },
    ]
  },
  {
    path: "*",
    element: <h1>Not Found Page !!!</h1>,
  }
]);

export default router;
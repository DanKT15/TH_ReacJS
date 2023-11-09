// import logo from '../asset/img/logo.svg';
// import '../asset/css/App.css';

import { useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom";
import { ContextProvider, Context } from "./Context"

function App() {

  return (
    
      <ContextProvider>
        <Link to={'test'}>testlink</Link>
        <Outlet/>
      </ContextProvider>

  );
}

export default App;


import { useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from "../../compoment/Admin/Context"
import Header from "../Admin/Header"

function AppAdmin() {

  return (
    
      <ContextProvider>

        <Header/>
        <Outlet/>
        
      </ContextProvider>

  );
}

export default AppAdmin;


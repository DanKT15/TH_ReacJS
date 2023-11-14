import { useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from "../../compoment/Admin/Context"

function AppAdmin() {

  return (
    
      <ContextProvider>
        <h3>Menu</h3>

        <ul><li><Link to={'login-admin'}>login</Link></li></ul>

        <Outlet/>
      </ContextProvider>

  );
}

export default AppAdmin;


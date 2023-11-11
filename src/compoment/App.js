import { useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom";
import { ContextProvider, Context } from "./Context"

function App() {

  return (
    
      <ContextProvider>
        <h3>Menu</h3>
        <ul>
          
          {/* <li><Link to={'test'}>test</Link></li> */}

          <li><Link to={'login'}>login</Link></li>

        </ul>
        <Outlet/>
      </ContextProvider>

  );
}

export default App;


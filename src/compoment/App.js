import { useContext, useState } from "react"
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { ContextProvider, Context } from "./Context"

import Menu from "./User/Layout/Header";

import ListNew from "./User/Main/ListNew";
import NewsDetail from "./User/Main/NewsDetail";
import Home from "./User/Main/Home.js";
import Footer from "./User/Layout/Footer.js";
// import "./User/Public/Css/style.css"
function App() {

  return (
    
      <ContextProvider>


        
        <Menu />
        {/* <Link to={'test'}>testlink</Link> */}

            
       
          {/* Các route khác */}
       
          <Routes> 
            <Route path="/" element={<Home />}  />
            
            {/* <Route path="/api/news/:id" element={<NewsDetail />} /> */}
          </Routes>
       
       


        <Outlet/>

        <Footer />
      </ContextProvider>

  );
}

export default App;


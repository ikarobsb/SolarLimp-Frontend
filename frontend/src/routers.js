import React from "react";
import Geral from "./components/Geral/Geral.js"
import { Route, Routes } from "react-router-dom";


function Routers(){
    return(
        <Routes>
            <Route exact path="/" element={<Geral/>}/>
       
        </Routes>
    )
}
export default Routers;
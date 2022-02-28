import "./LogIn.css";
import LogIn from "./LogIn";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../signup/SignUp";

function Home(){

    return (
        <div >

            <Routes>
                <Route path="/" element={ <LogIn />} ></Route>
                <Route path="/signup" element={ <SignUp /> }></Route>

                
            </Routes>
            

           
            

        </div>
    )
}

export default Home;
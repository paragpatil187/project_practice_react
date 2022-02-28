
import {Messanger} from "./MainChat/Messanger/ChatMessanger"
import "./App.css";
import SwitchAC from "./components/SwitchAC";
import Navbar from "./components/Navbar";
import MainBody from "./components/mainBody/MainBody";
import Suggestions from "./components/Suggestions";
import Comments from "./components/comments/Comments";
import SeeAll from "./components/SeeAll";
import Home from "./components/login/Home";
import Profile from "./components/Profile";
import { Routes, Route, Router } from "react-router-dom";
import SignUp from "../src/components/signup/SignUp"
const App = () => {


  return (
    <div className="app">
      
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
      
        <Route path="/home" element={<MainBody />}></Route>
        <Route path="/chats" element={<Messanger />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
     

    
    </div>
  );
};

export default App;

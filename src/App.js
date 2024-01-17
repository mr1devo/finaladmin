import './App.css';
import React, { useEffect, useState } from 'react'
import Topbar from './components/adminpanel/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/view/Registration";
import Places from "./components/view/Places";
import Home from "./components/adminpanel/Home";
import PlaceView from './components/view/PlaceView';


function App() {
  const [isloggedin,setIsloggedin] =useState(false);

  useEffect(()=>{
  const storevalue =localStorage.getItem("isloggedin");
  if(storevalue==="1")
   {
    setIsloggedin(true); 
  }
  },[])
  
  const Logincheck =() =>{
  localStorage.setItem("isloggedin",'1')
  setIsloggedin(true);
  }
  const Logoutcheck =() =>{
  localStorage.removeItem("isloggedin")
  setIsloggedin(false);
  }

  
  return (
    <div >
     
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
     <Route path='/Places' element={<Places method='POST'/>}></Route>
     <Route path='/PlaceView' element={<PlaceView method='GET'/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
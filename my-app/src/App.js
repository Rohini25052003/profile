//import "./App.css";
// import Road from "./road";
// import Hospital from "./hospital";
// import Gullapudi from "./gullapudi";
// import Municipality from "./municipality";
// import { Details } from "./details";
// import Calci from "./calci";
// import { Input } from "./collection/input/input";

import Home from "./collection/input/home";
//import React from "react";
import Login from "./collection/input/login";
import Signup from "./collection/input/signup";
import Update from "./collection/input/update";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from "react";
//import Hospital from "./hospital";
import Admin from "./collection/input/admin";
import Filling from "./collection/input/filling";
import Prblm from "./collection/input/prblm";

function App(){
    return(
     <div className="App"> 
        <Router>
          <Routes>
           
            {/* <Route path="/" element={<Details />} />
           
            <Route path='/gullapudi' element={<Gullapudi/>}></Route>
            <Route path='/road' element={<Road />}></Route>
            <Route path='/hospital' element={<Hospital />}></Route>
            <Route path='/municipality' element={<Municipality />}></Route>
            <Route path='/calsi' element={<Calci />}></Route>
            <Route path='/input' element={<Input />}></Route> */}
            <Route path="/" element={<Home />}/>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
           <Route path='/update' element={<Update/>}></Route>
           <Route path='/home' element={<Home/>}></Route>
           {/* <Route path='/hospital' element={<Hospital />}></Route> */}
           <Route path='/filling' element={<Filling/>}></Route>
           <Route path='/prblm' element={<Prblm/>}></Route>
           <Route path='/admin' element={<Admin/>}></Route>
          </Routes>
        </Router>
        </div>
        
      
      ) ;
}
export default App;                             
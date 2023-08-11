import React from "react"
import {useNavigate} from 'react-router-dom'
import Login from "./login"
import Signup from "./signup"


function Home (){
    const nav=useNavigate();
    const Login=()=>{
        nav('/login');
    }
    const Signup=()=>{
        nav('/signup');
    }
 
    return (
        <div className="homepage">

            <h1>Hello and welcome to the home</h1>
            <button onClick={Login}>login</button>
            <button onClick={Signup}>signup</button>
        </div>
    )
}

export default Home;
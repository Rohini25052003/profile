import React from "react"
import {useNavigate} from 'react-router-dom'
import Login from "./login"
import Signup from "./signup"
import'./../css/home.css';
import Admin from "./admin";


function Home (){
    const nav=useNavigate();
    const Login=()=>{
        nav('/login');
    }
    const Signup=()=>{
        nav('/signup');
    }
    const Admin=()=>{
        nav('/admin');
    }
 
    return (
        <><body>
        <div className="home">
            
        <marquee width="100%" direction="right" height="50px">
        welcome to this webpage
        </marquee>
         <center><button onClick={Login}>login</button><br/></center>
           <center> <button onClick={Signup}>signup</button><br/></center>
           <center> <button onClick={Admin}>admin</button></center>
        </div>
        </body>
        </>
        
    )
}

export default Home;
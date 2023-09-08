import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Signup from "./signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import Update from "./update";
import Prblm from "./prblm";
function Login(){
    const history=useNavigate();
    const nav=useNavigate();
    //const [name,setname]=useState([]);
    const [data,setdata]=useState([]);
    const [email,setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const Signup=()=>{
        nav("/signup");
    }
    const Update=()=>{
        nav("/update");
    }
   
    const Submit=async()=>{
        try{
            const res=await axios.get("https://profile-bsrl.onrender.com/output/"+email+"/"+password);
            if(res.data)
            
            
            {
                alert("logined")
                nav("/prblm")
                //console.log("eedewfdyweqjuete676776587");
            }
            else
            {

                alert("try again");
                nav("/signup")
                //alert("logged");
                //console.log("logged out");
            }

        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <>
        <div className="container">
        <h1>Login</h1>
        
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
                <button onClick={Submit}>Submit</button><br/>
                <button onClick={Signup}>signup</button><br/>
                <button onClick={Update}>update/forget password?</button>
        
        </div>
        </>

    )
}
export default Login;
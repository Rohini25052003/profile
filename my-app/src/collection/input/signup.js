import React, { useEffect, useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import Home from "./home";
import Login from "./login";
import '../css/signup.css'


function Signup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setcpassword]=useState([]);
    const nav=useNavigate();
    const Submit=async()=>
    {
        if(cpassword===password){
        try
        {
            
            const result=await axios.post("http://localhost:8000/input/"+email+"/"+password+"/"+cpassword);
                if(result.data)
                {
                    alert("saved successfully");
                    // nav("/login");
                }
                else
                {
                    alert("try again");
                }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    else{
        alert("not matched try again!!")
    }

    }


    return (
        <div className="container">

            <h1>Signup</h1>

            <form  action="/login">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
                <input type="text" onChange={(e) => { setcpassword(e.target.value) }} placeholder="cpassword" /><br/>
                <button onClick={Submit}>Submit</button>
            </form>
        </div>
    )
}

export default Signup;
import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Signup from "./signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
 function Login() 
{

    const history=useNavigate();
    //const [name,setname]=useState([]);
    const [data,setdata]=useState([]);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const update=()=>
    {
        history('/update');
    }
    const Submit=async()=>
    {
       // if(cpassword==password)
        //{

        
        try
        {
            const res=await axios.post("http://localhost:8000/output/"+email+"/"+password);
                if(res.data)
                {
                    alert("logined");
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
    return(
        <div className="container">

        <h1>Login</h1>

        <form>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
            <button onClick={Submit}>Submit</button>
        </form>

       
    </div>
    )
   }
   export default Login;
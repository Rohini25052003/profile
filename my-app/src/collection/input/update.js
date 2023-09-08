import React, { useEffect,useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Home from "./home";
export const Update=()=>{
    const nav=useNavigate();
    const [email,setEmail]=useState([]);
    const [newpasw,snewpasw]=useState([])
    const Submit=async()=>
    {
        
            
            const res= await axios.post("https://profile-bsrl.onrender.com/update/"+email+"/"+newpasw)
            {
                if(res.data)
                {
                     alert("saved");
                     nav('/home');
                }
                else
                {
                     alert("try again");
                } 
            }
       
    }
    return(
        <>
        <div className="container">
            <h1>Update</h1>
           
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
                <input type="password" onChange={(e) => { snewpasw(e.target.value) }} placeholder="New Password" /><br/>
                <button onClick={Submit}>update</button>
           
        </div>
        </>
        );
}
export default Update;
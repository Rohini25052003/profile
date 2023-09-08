import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import Filling from "./filling";
function Admin(){
    const history=useNavigate();
    //const [name,setname]=useState([]);
    
    const [email,setEmail]=useState([]);
    const [password,setPassword]=useState([]);
    const Submit=async()=>{
        try{
            const res=await axios.get("https://profile-bsrl.onrender.com/admin/"+email+"/"+password);
            if(res.data){
                alert("admin logined successfully");
                history('/filling');
                //console.log("eedewfdyweqjuete676776587");
            }
            else{
                alert("try again");
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
            <h1>Admin</h1>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
            <button onClick={Submit}>submit</button>
           
            </div>
    </>

    )
}
export default Admin;
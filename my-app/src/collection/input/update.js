import React, { useEffect,useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
function Update()
{
    const [password,setPassword]=useState('');
    const [upassword,setUpassword]=useState('');  
    
    const Submit=async()=>
    {
        try
        {
           
            const res=await axios.post("http://localhost:8000/update/"+password+"/"+upassword);
            if(res.data)
            {
                alert("updated")
            }
            else{
                alert("not updated")
            }
        }
        catch(e)
        {
            console.log(e)
        }
        

    }
    return (
        <div className="login">

            <h1>update</h1>

            <form >
              
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
                <input type="text" onChange={(e) => { setUpassword(e.target.value) }} placeholder="Upassword" /><br/>
                <input type="submit" onClick={Submit} />

            </form>

        </div>
    )
}

export default Update;

   
    

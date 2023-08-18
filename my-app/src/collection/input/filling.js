import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Home from './home';

export const Filling=()=>{
    const [users,setUsers]=useState([])
    const nav=useNavigate();
   
    
    const Submit=async()=>
    {
        try
        {
            const res=await axios.post("http://localhost:8000/input/"+users);
            {
                if(res.data)
                {
                    alert("saved");
                    nav("/home");   
                }
                else
                {
                    alert("try again");
                }
            }
        }
        catch(e)
        {
            console.log(e)
        } 

    }
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/filling")
    //     .then((result)=>
    //     {
    //         setdis(result.data);
    //     })
    // })
   
    return (
        
            <>
            <label>
                <textarea id="textarea"  placeholder="Type your text here" onChange={(e)=>setUsers(e.target.value)}
        style={{ width: "500px", height: "200px", margin: "10px" }} /> </label><br/>
            
            <button onClick={Submit}>Submit</button><br/>
          
        </>
    );
    
            }
            export default Filling;

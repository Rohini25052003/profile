import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
export const Input=()=>
{
    const [name,setname]=useState([]);
    const [dis,setdis]=useState([]);
    const [gmail,setgmail]=useState([]);
    const [mail,setmail]=useState([]);
    const [data,setdata]=useState([]);
    const [password, setpass] = useState([]);
    const Show=async()=>{
        const res = await axios.get("https://profile-bsrl.onrender.com/output/"+name)
        {
            if(res.data)
            {
                setdis(res.data.Name)
                setmail(res.data.Gmail)
                setpass(res.data.Password)
            }
            else{alert("alot found");}
        }
    }
    
    const Submit=async()=>
    {
        try
        {
            const res=await axios.post("https://profile-bsrl.onrender.com/input/"+name+"/"+gmail+"/"+password)
            {
                if(res.data)
                {
                    alert("saved");
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
    
    useEffect(()=>{
        axios.get("http://localhost:8000/all")
        .then((result)=>
        {
            setdata(result.data);
        })
    })
    return (
        <>
        <label>Name:<input type="text" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>Gmail:<input type='gmail' onChange={(e)=>setgmail(e.target.value)}/></label><br/>
        <label>Password:<input type='password' onChange={(e)=>setpass(e.target.value)}/></label><br/>
        <button onClick={Submit}>Submit</button><br/>
        <button onClick={Show}>show</button>{dis}<br/>{mail}
        <div>
            {
                data.map((rohini)=>
                (
                    <>
                    {rohini.Name}<br/>
                    {rohini.Gmail}<br/>
                    {rohini.Password}
                    
                    <br/>
                    </>
                ))
            }
        </div>
        
        </>
    )
}

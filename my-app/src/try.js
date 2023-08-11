import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Login() {

    const history=useNavigate();
    //const [name,setname]=useState([]);
    const [data,setdata]=useState([]);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setcpassword]=useState([]);

    // async function submit(e){
    //     const res = await axios.get("http://localhost:8000/output/")
    //     {
    //         if(res.data)
    //         {
                
    //             setEmail(res.data.Gmail)
    //             setPassword(res.data.Password)
    //             setPasswordconfirm(res.data.confirmpassword)

    //         }
    //         else{alert("alot found");}
    //     }
    // }
    const signup=()=>
    {
        nav('/signup');
    }
    const Submit=async()=>
    {
        if(res==password){

        
        try
        {
            const res=await axios.get("http://localhost:8000/output/"+email+"/"+password);
                if(res.data)
                {
                    alert("saved");
                }
                else
                {
                    alert("try again");
                }
                //window.location.reload(false);
            
        }
        catch(e)
        {
            console.log(e)
        }

    }
    else{
        alert("not worked")
    }
}
    
    useEffect(()=>{
        axios.get("http://localhost:8000/all"+email)
        .then((result)=>
        {
            setdata(result.data);
        })
    })


    return (
        <div className="login">

            <h1>Login</h1>

            <div>
            {/* //<label>Name:<input type="text" onChange={(e)=>setname(e.target.value)}></input></label><br/> */}
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /><br/>
                <input type="text" onChange={(e) => { setcpassword(e.target.value) }} placeholder="cpassword" /><br/>
                <input type="submit" onClick={Submit} />

            </div>
             
            <br />
            <p>OR</p>
            <br />
            <div>
            {
                data.map((rohini)=>
                (
                    <>
                    {rohini.email}<br/>
                    {rohini.password}<br/>
                    <br/>
                    </>
                ))
            }
            </div>
            <button onClick={signup} >Signup</button>
           
        </div>
       
    )
}

export default Login
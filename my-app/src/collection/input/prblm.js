import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
//import Filling from './filling';
import '../css/login.css';
const Prblm=()=>{
    const [users,setUsers]=useState([])
    
   
    
//     const Show=()=>{
        
//         {
//        users.map((data)=>
//        (
//            <>
             
//            {data.users}
        
//            </>
//        ))
//         }
//          

//     }
    
    
    useEffect(()=>{
        axios.get("https://profile-bsrl.onrender.com/filling/")
        .then((result)=>
        {
            setUsers(result.data);
            
        })
    })

    return (
        
            <>
           <div className="b">
                 {
                users.map((data)=>
                (
                    <>
                      <div>
                    {data.users}
                    </div>
                    </>
                ))
                 }
                {/* <button onClick={Show}>Road</button> */}
                 
                </div>
           
           
        </>
    );
    
            }
            export default Prblm;
            

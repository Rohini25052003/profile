import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Filling from './filling';
import '../css/prblm.css';
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
        axios.get("http://localhost:8000/filling/")
        .then((result)=>
        {
            setUsers(result.data);
            
        })
    })

    return (
        
            <>
           <div className="roni">
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
            

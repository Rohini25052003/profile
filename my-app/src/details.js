import React from "react";

import { useNavigate } from 'react-router-dom';
export const Details=()=>
{
    const nav=useNavigate();
    const Gullapudi=()=>
    {
        nav('/gullapudi');
    }
    
    
    return(
        <>
        <h1 ><center> My Village </center></h1>
        <button onClick={Gullapudi}><img src="gullapudi.jpg" alt="dummy" width="2000" height="500" /></button>
       < a href="http://www.onefivenine.com/india/villages/Krishna/Gampalagudem/Gullapudi"><b>Geography</b> </a> 
<button onclick="window.location.href='http://www.google.com'"></button>


       
        </>
    );
}






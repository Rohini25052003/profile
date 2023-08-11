import React from "react";
import { useNavigate } from 'react-router-dom';
const Login=()=>
{
    const nav=useNavigate();
   const  Road=()=>
    {
        nav('/road');
    }
    return(
        <>
       <button onClick={Road}>Road</button>
        </>
    );
}

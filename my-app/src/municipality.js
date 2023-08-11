import React from "react";
import { useNavigate } from 'react-router-dom';
function Municipality(){
    const nav=useNavigate();
    const Municipality=()=>{
        nav('/municipality');

    }
    const Home=()=>{
        nav('/');
    }
    return(
        <>
        <div>
        
       <center> <img src="municipality.jpg" alt="dummy" width="300" height="300" /></center>
        <p> CLAP campaign was launched with the aim of segregating liquid and solid waste, encouraging home composting and onsite waste treatment, apart from door-to-door collection of garbage.but in many villages the clap program was not goin well as it is because of not aware of the calp program and negligence by the government staff.i hope they maintain their regularity and villagers also need to cooperative with them and make the village clean and green</p>
       <center> <button onClick={Home}>Home</button></center>
        </div>
        </>

    )
}
export default Municipality;
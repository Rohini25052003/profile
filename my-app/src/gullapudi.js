import React from 'react';
import Road from "./road";
import Hospital from "./hospital";
import Municipality from "./municipality";
import Calci from "./calci";


import { useNavigate } from 'react-router-dom';
function Gullapudi(){
    const nav=useNavigate();
    const Road=()=>{
        nav('/road');
    }
    const Hospital=()=>{
        nav('/hospital');

    }
    
    const Municipality=()=>{
        nav('/municipality');
    }
    const Calci=()=>
    {
        nav('/calci');
    }
    return(
        <>
        <div>
        
            <button onClick={Road}><img src="road.jpg" alt="dummy" width="450" height="450"/></button>
            
            
            <button onClick={Hospital}><img src="hospital.jpg" alt="dummy" width="450" height="450" /></button>
           <button onClick={Municipality}><img src="municipality.jpg" alt="dummy" width="450" height="450" /></button>
           <button onClick={Calci}><img src="calci.jpg" alt="dummy" width="450" height="450" /></button>
        </div>
        </>
    )

}

export default Gullapudi;
import React from 'react';
import "./App.css";
import { useNavigate } from 'react-router-dom';
function Road(){
    const nav=useNavigate();
    const Road=()=>{
        nav('/road');

    }
    const Home=()=>{
        nav('/');
    }
    return(
        <>
        <div >
            
        <center> <img src="road1.jpg" alt="dummy" width="400" height="400" /></center>
        <p className='roni'> The Monsoon season is here in Andhra Pradesh and the already-battered roads are further damaged. Social media is filled with pictures of the bad roads embarrassing the government. With the issue becoming political, Chief Minister YS Jagan Mohan Reddy held a review of the roads in the state. He blamed the previous government for neglecting roads in the last two years of its tenure for the condition of the roads. The Chief Minister also ordered the officials to get the roads repaired by the next rainy season. Meanwhile, an RTI reply has revealed the actual reason for Bad roads in AP. From June 2019 i.e., from when Jagan Mohan Reddy took the oath to July this year, the Government has spent a paltry 15.86 Crore on new roads and maintenance. Usually, the number should have been at least 2,000 Crore for the roads to be in decent condition. The cash-strapped government has lost the confidence of contractors in the state. The contractors have decided to stay away from the road contracts in Andhra Pradesh until the old dues are cleared. Usually, Road Contracts do have tremendous demand but the situation is as such in Andhra Pradesh since the Government is diverting all the money to populistic schemes ignoring development and infrastructure.

</p>
         <center ><button onClick={Home}>Home</button></center>
        </div>
        </>

    );
}
export default Road;
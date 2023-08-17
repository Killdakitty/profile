import { Link } from "react-router-dom";
import Wheather from "./Weather";
// import WheaterData from "./Weather-data";
import { useEffect } from "react";

export default function Home() {
   
// useEffect(()=>{
//     navigator.geolocation.getCurrentPosition(function (position) {
//         console.log(position.coords.latitude, position.coords.longitude);
//       })

// },[])

    return (
        <div className="intro">
        <Link to ="/weather">Weather</Link>
        <h2>Hi, My name is Alex!</h2> 
        <h4 >I'm a software engingeer from NYC!</h4>
        <h4 >I recently graduated from PerScholas</h4>
        <h4 ></h4>
        </div>
    )}  
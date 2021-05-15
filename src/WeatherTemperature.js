import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
   
    return(
        <span className="WeatherTemperature"> 
        <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="degree-c">   
                    ºC
               </span>{" "}
               </span>
    );
    }
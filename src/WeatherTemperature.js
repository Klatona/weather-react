import React, {useState} from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState(`celsius`);
    
    function showFah(event) {
        event.preventDefault();
        setUnit("Fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function Fahrenheit(){
        return (props.celsius*9/5)+32;
    }

    if (unit === `celsius`) {
    return(
        <span className="WeatherTemperature"> 
        <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="degree-c">
                  <a href="/" className="active">
                    ºC
                  </a>
                </span>{" "}
                |{" "}
                <span className="degree-f">
                  <a href="/" onClick={showFah}>ºF</a>
                </span>
                </span>
    );
} else {
    return (
        <span className="WeatherTemperature"> 
        <span className="temperature">{Math.round(Fahrenheit())}</span>
                <span className="degree-c">
                  <a href="/" onClick={showCelsius}>
                    ºC
                  </a>
                </span>{" "}
                |{" "}
                <span className="degree-f">
                  <a href="/" className="active">ºF</a>
                </span>
                </span>
    )
}
}
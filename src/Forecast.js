import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
   
function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}  

if (loaded) {
    return (
        <div className= "Forecast"> 
        <ForecastDay data={forecast[0]} />
        </div>
    );
} else {
let apiKey = "77d24154f7d1152aa34c726466037a7c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
  return null;
}
  }
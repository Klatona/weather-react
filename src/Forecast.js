import React from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
function handleResponse(response){
    console.log(response.data);
}  
console.log(props);
let apiKey = "77d24154f7d1152aa34c726466037a7c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

    return (
      <div className= "Forecast"> 
      <div className="row justify-content-md-center">
                     <div className="col-md-2">
                            <div className="card Day">
                                <div className="card-body">
                                    <p>
                                        12:00
                                        <br />
                                    <div className="forecastIcon">
                                        <WeatherIcon code="01d" size={35} color="#f7f7e8"/>
                                    </div>
                                    </p>
                                    <p>
                                        <strong><span className="max-temp"> </span>5º</strong>
                                       {" "}| <span className="min-temp">10º</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                   </div>     
                    </div>
      );
  }
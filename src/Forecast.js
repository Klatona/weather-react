import React from "react";

import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  const weatherForecast = ( <div className="col-md-2">
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
                        </div>)
    return (
      <div className= "Forecast"> 
      <div className="row justify-content-md-center">
                     {weatherForecast}  
                        {weatherForecast}
                        {weatherForecast}
                        {weatherForecast}
                        {weatherForecast}
                        {weatherForecast}
                   </div>     
                    </div>
      );
  }
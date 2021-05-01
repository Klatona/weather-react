import React from "react";

import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";


export default function Forecast() {
  const weatherForecast = ( <div class="col-md-2">
                            <div className="card Day">
                                <div className="card-body">
                                    <p>
                                        12:00
                                        <br />
                                        <ReactAnimatedWeather
                                         icon="CLEAR_DAY"
                                             color= "#ffffff"
                                             size={25}
                                            animate={true}
                                         />
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
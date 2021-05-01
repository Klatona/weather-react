import React from "react";

import "./Forecast.css";

export default function Forecast() {
  const weatherForecast = ( <div class="col-md-2">
                            <div className="card Day">
                                <div className="card-body">
                                    <p>
                                        12:00
                                        <br />
                                        <i className="fas fa-cloud-sun"></i>
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
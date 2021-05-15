import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay (props) {
   function maxTemp () {
       let temp = Math.round(props.data.temp.max);
       return `${temp}º`;
   }
    function minTemp () {
       let temp = Math.round(props.data.temp.min);
       return `${temp}º`;
   }
   function day () {
       let date = new Date(props.data.dt*1000);
       let day = date.getDay();
       let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
       return days[day];
   }
    return(
        <div className= "ForecastDay"> 
                            <div className="card Day">
                                <div className="card-body">
                                    <p>
                                      {day()}
                                      </p>
                             <div className="forecastIcon">
                                        <WeatherIcon code="01d" size={35} color="#f7f7e8"/>
                                    </div>
                                    <p>
                                        <strong><span className="max-temp"> </span> {maxTemp()} </strong>
                                       {" "}| <span className="min-temp"> {minTemp()} </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                      
                 
                    );
    
}
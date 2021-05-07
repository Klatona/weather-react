import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [weatherData, setWeatherData]= useState({ready: false});
  
  function handleResponse(response){
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt*1000),
      icon: <ReactAnimatedWeather
        icon="CLOUDY"
        color= "#557174"
        size={70}
        animate={true}
      />
    });
  }

  if(weatherData.ready){
    return (
<div className="Weather">
      <div className="row Overview">
        <div className="col-sm-12">
          <div className="card-body">
            <h1>
              <span> {weatherData.city}</span>,
              <span> {weatherData.country} </span>
            </h1>
            <h2>
              <span> Last updated: <FormattedDate date={weatherData.date} />
                </span> 
               
              <br />
            </h2>
            <h3>{weatherData.description}</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="card Toronto">
            <div className="card-body">
              <p className="main-degree">
                <span>
                  {weatherData.icon}
                </span>
                <span> {Math.round(weatherData.temp)}</span>
                <span className="degree-c">
                  <a href="/" className="active">
                    ºC
                  </a>
                </span>{" "}
                |{" "}
                <span className="degree-f">
                  <a href="/">ºF</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card humidityWind">
            <div className="card-body">
              <ul>
                <li>
                  Humidity: <span>{weatherData.humidity}%</span>
                </li>
                <li>
                  Wind: <span>{weatherData.wind}km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} else {
  const apiKey = "77d24154f7d1152aa34c726466037a7c";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";

    }    
  }

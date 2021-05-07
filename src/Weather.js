import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
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
      <div className="card-body background">
        <form className="search-form">
          <div className="row">
            <div className="col-8">
              <div className="input-group mb-5 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="search-text"
                  placeholder="Enter a city"
                  autoFocus="on"
                  autoComplete="off"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-1">
              <button
                type="button"
                className="btn btn-outline-success mb-5 mt-4"
                id="current-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
      </div>
     <WeatherInfo data={weatherData}/>
    </div>

  );
} else {
  const apiKey = "77d24154f7d1152aa34c726466037a7c";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";

    }    
  }

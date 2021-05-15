import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData]= useState({ready: false});
  const [city, setCity]= useState(props.defaultCity);
 

  function handleResponse(response){
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt*1000),
      icon: response.data.weather[0].icon 
    });
  }
function Search(){
  const apiKey = "77d24154f7d1152aa34c726466037a7c";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit (event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showPosition(position) {
  let apiKey = "66d807cb5401e2d37e109b69127e15b2";
  let unit = "Metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);
  
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

  if(weatherData.ready){
    return (
<div className="Weather">
      <div className="card-body background">
        <form className="search-form" onSubmit={handleSubmit}>
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
                  onChange={handleCityChange}
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
                id="current-button" onClick={getCurrentPosition}
              >
                Current
              </button>
            </div>
          </div>
        </form>
      </div>
     <WeatherInfo data={weatherData} />
     <Forecast coordinates={weatherData.coordinates}/>
    </div>

  );
} else {
  Search();
  return "Loading...";

    }    
  }

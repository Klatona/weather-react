import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temp: 14,
    humidity: 10,
    wind: 2,
    icon: "fas fa-cloud"
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm-8">
          <div className="card Toronto">
            <div className="card-body">
              <p className="main-degree">
                <span>
                  <i class={weatherData.icon}></i>
                </span>
                <span> {weatherData.temp}</span>
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
}

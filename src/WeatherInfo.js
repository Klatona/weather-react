import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="row Overview">
        <div className="col-sm-12">
          <div className="card-body">
            <h1>
              <span> {props.data.city}</span>,
              <span> {props.data.country} </span>
            </h1>
            <h2>
              <span> Last updated: <FormattedDate date={props.data.date} />
                </span> 
               
              <br />
            </h2>
            <h3 className="text-capitalize">{props.data.description}</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="card Toronto">
            <div className="card-body">
              <p className="main-degree">
               <span className="icon">
                  <WeatherIcon code={props.data.icon} />
                </span>
                <span> {Math.round(props.data.temp)}</span>
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
                  Humidity: <span>{props.data.humidity}%</span>
                </li>
                <li>
                  Wind: <span>{props.data.wind}km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
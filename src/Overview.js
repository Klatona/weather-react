import React from "react";
import "./Overview.css";
import axios from "axios";

export default function Overview() {
  let overviewData = {
    city: "Toronto",
    country: "CA",
    date: "Saturday 10:00",
    description: "cloudy"
  };
  return (
    <div className="Overview">
      <div className="row">
        <div className="col-sm-12">
          <div className="card-body">
            <h1>
              <span> {overviewData.city} </span>,
              <span> {overviewData.country} </span>
            </h1>
            <h2>
              <span> Last updated: {overviewData.date}</span>

              <br />
            </h2>
            <h3>{overviewData.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

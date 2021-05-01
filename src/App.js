import React from "react";
import './App.css';
import Form from "./Form";
import Overview from "./Overview";
import Weather from "./Weather";
import Kristen from "./Kristen";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div class="card body">
        <div class="card-body background">
          <Form />
         <Overview />
         <Weather />
         <Forecast />
        
        </div>
       
      </div>
      <Kristen />
    </div>
  );
}


export default App;

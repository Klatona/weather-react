import React from "react";
import './App.css';
import Form from "./Form";
import Overview from "./Overview";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div class="card body">
        <div class="card-body background">
          <Form />
         <Overview />
         <Weather />
        </div>
      </div>
     
    </div>
  );
}


export default App;

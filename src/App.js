import React from "react";
import './App.css';

import Weather from "./Weather";
import Kristen from "./Kristen";


function App() {
  return (
    <div className="App">
      <div className="card body">
        <div className="card-body background">
          
         <Weather defaultCity="Toronto"/>
        
        
        </div>
       
      </div>
      <Kristen />
    </div>
  );
}


export default App;

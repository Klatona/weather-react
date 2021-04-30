import './App.css';
import axios from "axios";

function App() {
  function showWeather(response){
    alert(`The temperature is ${response.data.main.temp}`);
  } 
  
  
  let apiKey = "66d807cb5401e2d37e109b69127e15b2";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
    
  return (
    <div className="App">
      <header className="App-header">
        
       React App by Kristen Latona
        
      </header>
    </div>
  );
}


export default App;

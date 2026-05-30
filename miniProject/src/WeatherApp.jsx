import { useState } from "react";

import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";
import "./WeatherApp.css";

function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    temp: 25.67,
    tempMin: 23.23,
    tempMax: 27.02,
    humidity: 63,
    feels_like: 26.65,
    weather: "haze",
  });

  function updateInfo(result){
    setWeatherInfo(result);
  }

  return (
  <div className="weatherContent">
    <h2>Weather App by Shivam</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
  </div>
  )
}

export default WeatherApp;

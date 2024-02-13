import "./WeatherApp.css";

import seacrh_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

function WeatherApp() {
  let api_key = "f3fbf4bd60021e4e053c9e1fa1ff54c8";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percentage");

    const wind = document.getElementsByClassName("wind-rate");

    const temperature = document.getElementsByClassName("weather-temp");

    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity;

    wind[0].innerHTML = data.wind.speed;

    temperature[0].innerHTML = Math.round(data.main.temp);

    location[0].innerHTML = data.name;
  };
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="search" />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={seacrh_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24° c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" />
            <div className="data">
              <div className="humidity-percentage">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" />
            <div className="data">
              <div className="wind-rate">18km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;

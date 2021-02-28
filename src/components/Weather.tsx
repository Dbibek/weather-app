import { FC } from "react";

import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}
const Weather: FC<WeatherProps> = ({ data }) => {
  const celsius = (data.main.temp_max - 273.15).toFixed(0);
  return (
    <div className="section">
      <div className="weather-container">
        <h1 className="title">
          {data.name}-{data.sys.country}
        </h1>

        <div className="data-container">
          <div>
            <p className="headings">{data.weather[0].description}</p>
            <p className="imageicon">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="weathericon"
              />
            </p>
          </div>
          <div >
            <p className="headings">temp</p>
            <p className="weather-title">{celsius} °C</p>
          </div>
          <div className="data-div">
            <p className="headings">Humidity</p>
            <p className="weather-title">{data.main.humidity}</p>
          </div>
          <div className="data-div">
            {" "}
            <p className="headings">Wind</p>
            <p className="weather-title">{data.wind.speed}</p>
          </div>
          <div className="data-div">
            <p className="headings">Pressure</p>
            <p className="weather-title">{data.main.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

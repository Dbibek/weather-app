import { FC } from "react";

import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}
const Weather: FC<WeatherProps> = ({ data }) => {
  const celsius = (data.main.temp_max - 273.15).toFixed(2);
  return (
    <section className="section">
      <div className="weather-container">
        <h1 className="title">
          {data.name}-{data.sys.country}
        </h1>

        <div className="level-item">
          <div>
            <p className="heading">{data.weather[0].description}</p>
            <p className="imageicon">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="weathericon"
              />
            </p>
          </div>
          <div className="level">
            <p className="heading">temp</p>
            <p className="title">{celsius} °C</p>
          </div>
          <div className="level">
            <p className="heading">Humidity</p>
            <p className="title">{data.main.humidity}</p>
          </div>
          <div className="level">
            {" "}
            <p className="heading">Wind</p>
            <p className="title">{data.wind.speed}</p>
          </div>
          <div className="level">
            <p className="heading">Pressure</p>
            <p className="title">{data.main.pressure}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;

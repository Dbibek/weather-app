import React, { FC } from "react";

import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}
const Weather: FC<WeatherProps> = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          {data.name}-{data.sys.country}
        </h1>
        <div className="level">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;

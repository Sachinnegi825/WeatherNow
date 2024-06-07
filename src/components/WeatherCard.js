import React from "react";

const WeatherCard = ({ data, location }) => {
  return (
    <div className="weather_card">
      <h1>
        {location?.name}, {location?.country}
      </h1>
      <img src={data?.condition?.icon} alt="" />
      <p>{location?.localtime}</p>
      <div className="weather_details">
        <p>
          <span>Temp</span>
          <span>{data?.temp_c}&deg;C</span>
        </p>
        <p>
          <span>Humidity</span>
          <span>{data?.humidity}%</span>
        </p>
        <p>
          <span>Wind Speed</span>
          <span>
            {data?.wind_kph}kph , 🌪{data?.wind_degree} {data?.wind_dir}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;

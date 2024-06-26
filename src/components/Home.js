import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");

  const handleWeather = async () => {
    setLoading(true);
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ad8873e964mshc2246385e3dfa94p16dc7fjsn5e523754db5b",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (!data?.error) {
        setWeatherData(data?.current);
        setLocation(data?.location);
        console.log("data", data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <div className="search_box">
        <p>
          Curious about the weather in your area? Enter your city name and click
          'Search' to get the latest forecast!
        </p>
        <input
          type="text"
          value={city}
          placeholder="Enter City Name..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => handleWeather()} className="btn">
          Search
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        weatherData && <WeatherCard data={weatherData} location={location} />
      )}
    </>
  );
};

export default Home;

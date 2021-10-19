import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryWeather = (props) => {
  const { filter, index } = props;

  const [weather, setWeather] = useState({
    request: {},
    location: {},
    current: {},
  });

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${filter[index].capital[0]}`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, [api_key, filter, index]);

  return (
    <div>
      {" "}
      <h3>Weather in {filter[index].capital[0]}</h3>
      <div>
        <b>temperature: </b> {weather.current.temperature} celsius{" "}
      </div>
      <img src={weather.current.weather_icons} alt={filter[index].capital[0]} />
      <div>
        <b>wind: </b> {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}{" "}
      </div>
    </div>
  );
};

export default CountryWeather;

import React from "react";

import CountryWeather from "./CountryWeather";

const CountryView = (props) => {
  const { filter, index } = props;

  return (
    <div>
      <h2>{filter[index].name.common}</h2>
      <div>capital {filter[index].capital.join(", ")}</div>
      <div>population {filter[index].population}</div>
      <h3>languages</h3>
      <ul>
        {Object.values(filter[index].languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={filter[index].flags.png} alt={filter[index].name.common} />
      <CountryWeather filter={filter} index={index} />
    </div>
  );
};

export default CountryView;

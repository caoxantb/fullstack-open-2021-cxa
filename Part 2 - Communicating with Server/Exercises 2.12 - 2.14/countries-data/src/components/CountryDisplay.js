import React from "react";

import CountryView from "./CountryView";

const CountryDisplay = (props) => {
  const { country, handler, filter, show } = props;

  const showCountry = (index) => {
    return !show[index] ? (
      <div></div>
    ) : (
      <CountryView filter={filter} index={index} />
    );
  };

  return (
    <div>
      {country.name.common}{" "}
      <button onClick={() => handler(filter.indexOf(country))}>
        {show[filter.indexOf(country)] ? "hide" : "show"}
      </button>
      {showCountry(filter.indexOf(country))}
    </div>
  );
};

export default CountryDisplay;

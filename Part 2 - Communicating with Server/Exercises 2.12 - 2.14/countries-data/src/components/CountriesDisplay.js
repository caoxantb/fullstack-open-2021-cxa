import React from "react";

import CountryDisplay from "./CountryDisplay";
import CountryView from "./CountryView";

const CountriesDisplay = (props) => {
  const { filter, handler, show } = props;

  if (filter.length === 0) return "";
  else if (filter.length === 1)
    return <CountryView filter={filter} index={0} />;
  else if (filter.length <= 10)
    return (
      <div>
        {filter.map((country) => (
          <CountryDisplay
            country={country}
            handler={handler}
            filter={filter}
            show={show}
            key={country.name.common}
          />
        ))}
      </div>
    );
  else if (filter.length > 10) return <div> too many results</div>;
};

export default CountriesDisplay;

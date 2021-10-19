import React, { useState, useEffect } from "react";
import axios from "axios";

import CountriesDisplay from "./components/CountriesDisplay";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [show, setShow] = useState(new Array(10).fill(false));

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const countriesFiltered =
    newFilter === ""
      ? []
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(newFilter)
        );

  const handleInputFilterChange = (event) => {
    setNewFilter(event.target.value.toLowerCase());
  };

  const handleShowButton = (index) => {
    const showClone = [...show];
    showClone[index] = !showClone[index];
    setShow(showClone);
  };

  return (
    <div>
      find countries:{" "}
      <input value={newFilter} onChange={handleInputFilterChange} />
      <CountriesDisplay
        filter={countriesFiltered}
        handler={handleShowButton}
        show={show}
      />
    </div>
  );
};

export default App;

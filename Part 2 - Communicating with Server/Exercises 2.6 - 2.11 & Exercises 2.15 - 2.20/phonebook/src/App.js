import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName))
      window.alert(`${newName} existed`);
    else if (isNaN(newNumber.replace(/-/g, "")))
      window.alert(`${newNumber} is not a valid telephone number`);
    else setPersons([...persons, { name: newName, number: newNumber }]);
  };

  const personsDisplay =
    newFilter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter)
        );

  const handleInputNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleInputFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Filter</h2>
      <Filter value={newFilter} onChange={handleInputFilterChange} />

      <h2>Phonebook</h2>
      <PersonsForm
        onSubmit={handleFormSubmission}
        values={{ nameInput: newName, numInput: newNumber }}
        onChanges={{
          nameOnChange: handleInputNameChange,
          numOnChange: handleInputNumberChange,
        }}
      />

      <h2>Numbers</h2>
      <Persons persons={personsDisplay} />
    </div>
  );
};

export default App;
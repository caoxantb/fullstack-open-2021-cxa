import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

import personsService from "./services/personsService";

import "./styles/message.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState({ message: "", status: "" });

  useEffect(() => {
    personsService.getAll().then((res) => {
      setPersons(res.data);
    });
  }, []);

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const personObject = { name: newName, number: newNumber };

    if (persons.some((person) => person.name === newName)) {
      const personUpdating = persons.find((person) => person.name === newName);
      if (
        window.confirm(
          `${personUpdating.name} has already been added to the list. Update number?`
        )
      ) {
        personsService.update(personUpdating.id, personObject).then((res) => {
          setPersons(
            persons.map((person) =>
              person.id !== personUpdating.id ? person : res.data
            )
          );
          setMessage({
            status: "resolved",
            message: `${personUpdating.name} updated`,
          });
          setMessageTimeout();
          setNewName("");
          setNewNumber("");
        });
      }
    } else if (isNaN(newNumber.replace(/-/g, "")) || newNumber === "") {
      window.alert(`${newNumber} is not a valid telephone number`);
    } else
      personsService.create(personObject).then((res) => {
        setPersons([...persons, res.data]);
        setMessage({
          status: "resolved",
          message: `${res.data.name} added`,
        });
        setMessageTimeout();
        setNewName("");
        setNewNumber("");
      });
  };

  const handleDelete = (id) => {
    const personDeleting = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${personDeleting.name}?`)) {
      personsService.remove(id).catch((error) => {
        setMessage({
          status: "rejected",
          message: `${personDeleting.name} has already been deleted`,
        });
        setMessageTimeout();
        setPersons(persons.filter((person) => id !== person.id));
      });
      setPersons(persons.filter((person) => id !== person.id));
    }
  };

  const setMessageTimeout = () => {
    setTimeout(() => {
      setMessage({
        status: "",
        message: "",
      });
    }, 5000);
  };

  const handleInputNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleInputFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const personsDisplay =
    newFilter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter)
        );

  return (
    <div>
      <h2>Filter</h2>
      <Filter value={newFilter} onChange={handleInputFilterChange} />

      <h2>Phonebook</h2>
      <Notification message={message} />
      <PersonsForm
        onSubmit={handleFormSubmission}
        values={{ nameInput: newName, numInput: newNumber }}
        onChanges={{
          nameOnChange: handleInputNameChange,
          numOnChange: handleInputNumberChange,
        }}
      />

      <h2>Numbers</h2>
      <Persons persons={personsDisplay} deleteHandler={handleDelete} />
    </div>
  );
};

export default App;

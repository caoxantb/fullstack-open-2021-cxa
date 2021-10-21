import React from "react";

const Filter = (props) => (
  <div>
    {props.persons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}{" "}
        <button onClick={() => props.deleteHandler(person.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default Filter;

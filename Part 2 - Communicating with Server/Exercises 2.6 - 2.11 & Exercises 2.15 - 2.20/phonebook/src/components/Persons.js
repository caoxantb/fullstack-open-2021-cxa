import React from "react";

const Filter = (props) => (
  <div>
    {props.persons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}
      </div>
    ))}
  </div>
);

export default Filter;

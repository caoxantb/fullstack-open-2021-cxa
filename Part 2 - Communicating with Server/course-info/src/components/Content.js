import React from "react";

import Part from "./Part";

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
      <h4>
        Total of {parts.reduce((prev, curr) => prev + curr.exercises, 0)}{" "}
        exercises;
      </h4>
    </div>
  );
};

export default Content;

import React from "react";

const Part = (props) => {
  const { part } = props;
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
};

export default Part;

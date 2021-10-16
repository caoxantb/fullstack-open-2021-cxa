import React from "react";

const PersonsInput = (props) => {
  return (
    <div>
      {props.text}: <input value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default PersonsInput;

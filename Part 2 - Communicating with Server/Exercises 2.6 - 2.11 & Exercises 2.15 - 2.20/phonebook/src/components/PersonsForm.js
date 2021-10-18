import React from "react";

import PersonsInput from "./PersonsInput";

const PersonsForm = (props) => {
  const { onSubmit, values, onChanges } = props;
  return (
    <form onSubmit={onSubmit}>
      <PersonsInput
        value={values.nameInput}
        onChange={onChanges.nameOnChange}
        text="name"
      />
      <PersonsInput
        value={values.numInput}
        onChange={onChanges.numOnChange}
        text="number"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default PersonsForm;

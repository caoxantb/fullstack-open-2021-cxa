import React from "react";

const StatsLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.data} {props.addon}
      </td>
    </tr>
  );
};

export default StatsLine;

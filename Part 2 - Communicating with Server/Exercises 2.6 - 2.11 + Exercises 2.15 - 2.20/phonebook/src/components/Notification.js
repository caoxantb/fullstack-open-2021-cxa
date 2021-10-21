import React from "react";

const Notification = (props) => {
  if (props.message.status === "rejected")
    return <div className="rejected">{props.message.message}</div>;
  else if (props.message.status === "resolved") {
    return <div className="resolved">{props.message.message}</div>;
  }
  return <div></div>;
};

export default Notification;

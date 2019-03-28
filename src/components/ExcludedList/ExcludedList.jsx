import React from "react";
import "./ExcludedList.css";

const ExcludedList = props => {
  return (
    <div className="excluded-list">
      {props.headings.map((heading, index) => (
        <h6 key={index}>{heading}:</h6>
      ))}
      {props.strings.map((string, index) => (
        <p key={index}>{string}</p>
      ))}
    </div>
  );
};

export default ExcludedList;

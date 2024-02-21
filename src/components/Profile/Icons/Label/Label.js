import React from "react";

const Label = ({ labelText }) => {
  return (
    <>
      <p>{labelText.firstLine}</p>
      <h1>
      {labelText.secondLine}
      </h1>
    </>
  );
};

export default Label;

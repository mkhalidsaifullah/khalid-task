import React from "react";

const Label = ({user}) => {
  return (
    <>
      <p>Hi, My name is</p>
      <h1>
        {user.name.first} {user.name.last}
      </h1>
    </>
  );
};

export default Label;

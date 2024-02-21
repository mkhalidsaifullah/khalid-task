import React from "react";
import Icon from "./Icon";

const Icons = ({ setIcon }) => {
  return (
    <>
      <button onClick={setIcon("name")}>Name</button>
      <button onClick={setIcon("email")}>email</button>
      <button onClick={setIcon("dob")}>Date of Birth</button>
      <button onClick={setIcon("loc")}>Location</button>
      <button onClick={setIcon("phn")}>Contact</button>
      <button onClick={setIcon("pas")}>password</button>
    </>
  );
};

export default Icons;

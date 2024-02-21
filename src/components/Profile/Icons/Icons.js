import React from "react";
import Icon from "./Icon";

const Icons = ({ setIcon }) => {
  return (
    <>
      <button onClick={setIcon("avatar")}>
        {" "}
        <img src="/Icons/avatar" alt="avatar" />
      </button>
      <button onClick={setIcon("email")}>
        <img src="/Icons/email" alt="email" />
      </button>
      <button onClick={setIcon("dob")}>
        <img src="/Icons/calendar" alt="calendar" />
      </button>
      <button onClick={setIcon("map")}>
        <img src="/Icons/map" alt="map" />
      </button>
      <button onClick={setIcon("phn")}>
        <img src="/Icons/phone" alt="phone" />
      </button>
      <button onClick={setIcon("loc")}>
        <img src="/Icons/lock" alt="lock" />
      </button>
    </>
  );
};

export default Icons;

import React, { useState } from "react";
import Label from "./Label/Label";
import Icons from "./Icons";

const Container = ({ user }) => {
  const [CurrentIcon, setCurrentIcon] = useState("");
  console.log(CurrentIcon);
  const [LabelText, setLabelText] = useState({});
  if (CurrentIcon === "avatar") {
    setLabelText = {
      firstLine: "Hi, My name is",
      secondLine: `${user.firstName} ${user.secondName}`,
    };
  } else if (CurrentIcon === "email") {
    setLabelText = {
      firstLine: "My email is",
      secondLine: user.email,
    };
  } else if (CurrentIcon === "dob") {
    setLabelText = {
      firstLine: "My date of birth is",
      secondLine: user.dob,
    };
  } else if (CurrentIcon === "map") {
    setLabelText = {
      firstLine: " My name location is",
      secondLine: user.location,
    };
  } else if (CurrentIcon === "phn") {
    setLabelText = {
      firstLine: " My phone number is",
      secondLine: user.phone,
    };
  } else if (CurrentIcon === "loc") {
    setLabelText = {
      firstLine: " My user name is",
      secondLine: user.login.username,
    };
  }
  return (
    <>
      <Label LabelText={LabelText} />
      <Icons setCurrentIcon={setCurrentIcon} />
    </>
  );
};

export default Container;

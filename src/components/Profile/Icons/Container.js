import React, { useState } from "react";
import Label from "./Label/Label";
import Icons from "./Icons";

const Container = ({ user }) => {
  const [CurrentIcon, setCurrentIcon] = useState();
  console.log(CurrentIcon);
  return (
    <>
      <Label />
      <Icons setCurrentIcon={setCurrentIcon} />
    </>
  );
};

export default Container;

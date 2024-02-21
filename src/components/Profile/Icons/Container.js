import { useState } from "react";
import Label from "./Label/Label";
import Icons from "./Icons";

const Container = ({ user }) => {
  const [CurrentIcon, setCurrentIcon] = useState("avatar");

  return (
    <>
      <Label CurrentIcon={CurrentIcon} user={user} />
      <Icons setCurrentIcon={setCurrentIcon} />
    </>
  );
};

export default Container;

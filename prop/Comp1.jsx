import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ user }) => {
  return (
    <>
      <div>Com1</div>
      <Comp2 user={user} />
    </>
  );
};

export default Comp1;

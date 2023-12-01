import React from "react";

const Greet = ({ name = "no name" }: { name?: string }) => {
  return <div>Hello, {name}</div>;
};

export default Greet;

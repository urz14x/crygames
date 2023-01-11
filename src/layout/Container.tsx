import React, { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren) => {
  return <div className=" mt-24 min-h-screen">{props.children}</div>;
};

export default Container;

import React, { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren) => {
  return (
    <div className="pt-10 flex justify-center items-center min-h-screen">
      {props.children}
    </div>
  );
};

export default Container;

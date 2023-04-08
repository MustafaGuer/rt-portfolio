import React from "react";

export const RootLayout: React.FC<{
  children: React.ReactElement;
}> = (props) => {

  return (
    <>
      <main>{props.children}</main>
    </>
  );
};
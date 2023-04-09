import React from "react";
import {MainHeader} from "./MainHeader";

export const RootLayout: React.FC<{
  children: React.ReactNode;
}> = (props) => {

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};
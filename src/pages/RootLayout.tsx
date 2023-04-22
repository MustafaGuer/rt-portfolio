import React from "react";
import {MainHeader} from "../components/Layout/MainHeader";
import Footer from "../components/Layout/Footer";
import {Outlet} from "react-router-dom";

const RootLayout: React.FC = () => {

  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
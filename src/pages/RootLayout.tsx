import React from "react";
import {MainHeader} from "../components/Layout/MainHeader";
import Footer from "../components/Layout/Footer";
import {Outlet} from "react-router-dom";
import {SideBars} from "../components/Layout/SideBars";

const RootLayout: React.FC = () => {

  return (
    <>
      <MainHeader />
      <main style={{position: 'relative'}}>
        <SideBars />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
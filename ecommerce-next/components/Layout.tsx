import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "@mantine/core";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <Container></Container> */}
    </>
  );
};

export default Layout;

import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "@mantine/core";
import HeroSection from "./HeroSection";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Container size="xl">
        <Navbar />
      </Container>
      <div className="relative bottom-14 -z-10">
        <HeroSection />
      </div>
      <Container size="xl">
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;

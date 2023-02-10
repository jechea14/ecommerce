import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "@mantine/core";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <Container size="xl">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

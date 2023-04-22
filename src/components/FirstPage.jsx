import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import BuildForGrowth from "./BuildForGrowth";
import Footer from "./Footer";
import Community from "./Community";
import GridSection from "./GridSection";
const FirstPage = () => {
  return (
    <section>
      <Header />
      <Community />
      <BuildForGrowth />
      <GridSection />
      <Footer />
    </section>
  );
};

export default FirstPage;

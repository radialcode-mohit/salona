import React from "react";
import BreakPoint from "./BreakPoint";
import MyNav from "./MyNav";
import Deeper from "./Deeper";
import Source from "./Source";
import DevloperUpdate from "./DevloperUpdate";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
import SecondHero from "./SecondHero";

const SecondPage = () => {
  return (
    <section>
      <BreakPoint />
      <MyNav />
      <SecondHero />
      <GetStarted />
      <Deeper />
      <Source />
      <DevloperUpdate />
      <Footer />
    </section>
  );
};

export default SecondPage;

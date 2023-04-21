import React, { useState } from "react";
import { Container } from "react-bootstrap";
import first from "../assets/images/img/marque//11000.png";
import second from "../assets/images/img/marque/women.png";
import third from "../assets/images/img/marque/bigimg.png";
import frth from "../assets/images/img/marque/computer.png";
import five from "../assets/images/img/marque/48000.png";
import six from "../assets/images/img/marque/girl.png";
import seven from "../assets/images/img/marque/3800.png";
import eight from "../assets/images/img/marque/mens.png";
import bgimg from "../assets/images//img/marque/bgimg.png";
import Marquee from "react-fast-marquee";
// import utube from "../assets/images/img/marque/Frame.png";
const GridSection = () => {
  const [last, setlast] = useState(2);
  return (
    <section className=" position-relative overflow-hidden py-lg-5">
      <Container className="pt-5">
        <p className=" ff_helvetica fw_400 fs_xl clrr_white">
          Join a thriving community.
        </p>
      </Container>
      <Marquee>
        <div className="d-grid gridclass">
          <div className="girditems grid1">
            <img src={first} alt="first" className="w-100" />
          </div>
          <div className="girditems grid2">
            <img src={second} alt="second" className="w-100" />
          </div>
          <div className="girditems grid3">
            <img src={third} alt="third" className="w-100 h-100" />
          </div>
          <div className="girditems grid4">
            <img src={frth} alt="frth" className="w-100 " />
          </div>

          <div className="girditems grid5">
            <img src={five} alt="five" className="w-100 " />
          </div>
          <div className="girditems grid6">
            <img src={six} alt="six" className="w-100 " />
          </div>
          <div className="girditems grid7">
            <img src={seven} alt="seven" className="w-100 " />
          </div>
          <div className="girditems grid8">
            <img src={eight} alt="eight" className="w-100 " />
          </div>
        </div>
      </Marquee>
      <Container className=" position-absolute bgimg_maqueesec">
        <img src={bgimg} alt="bgimg" className="w-100" />
      </Container>
      <Container>
        {" "}
        <div className="py-lg-5"></div>
        {/* <div className="py-5"></div> */}
        <div className="py-5 text-center ">
          <p className=" ff_helvetica fw_400 fs_xl clrr_white">
            It's time to join the thousands of creators, <br /> artists, and
            developers using Solana.
          </p>
          <button
            onClick={() => {
              setlast(0);
            }}
            className={
              last === 0
                ? "py-2 px_3 py-md-3 px-33 br_36px border_1px_white bg-transparent clrr_white text_uppercase purple_bglinear_on_hover purple_bglinear fs_3xsm"
                : "py-2 px_3 py-md-3 px-33 br_36px border_1px_white bg-transparent clrr_white text_uppercase purple_bglinear_on_hover fs_3xsm"
            }
          >
            Start building
          </button>
        </div>
        {/* <div className="py-5"></div> */}
        <div className="py-lg-5"></div>
      </Container>
    </section>
  );
};

export default GridSection;

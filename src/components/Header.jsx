import React, { useState } from "react";
import MyNav from "./MyNav";
import BreakPoint from "./BreakPoint";
import { Container } from "react-bootstrap";
import imgone from "../assets/images/img/navbar/img1.png";
import imgtwo from "../assets/images/img/navbar/img2.png";
import imgthree from "../assets/images/img/navbar/img3.png";
import imgfour from "../assets/images/img/navbar/img4.png";
import imgfive from "../assets/images/img/navbar/img5.png";
import imgsix from "../assets/images/img/navbar/img6.png";
import imgseven from "../assets/images/img/navbar/img7.png";
import Marquee from "react-fast-marquee";
const Header = () => {
  const [first, setfirst] = useState(0);
  return (
    <header className=" bg- black ">
      <BreakPoint />
      <div className=" bg_header_img bg_pos_29">
        <MyNav />
        <Container>
          <div className="pt-lg-3"></div>
          <div className="pt-lg-5"></div>
          <div className="text-center pt-5">
            <p className="ff_helvetica fw_400 fs_6xl clrr_white ">
              Powerful for developers.
              <br />
              Fast for everyone.
            </p>
            <p className="ff_helvetica fw_400 fs_md max_w_589 mx-auto clrr_white pt-md-5">
              Bring blockchain to the people. Solana supports experiences for
              power users, new consumers, and everyone in between.
            </p>
            <div className="d-flex justify-content-center pt-4 pt-md-5">
              <button
                onClick={() => {
                  setfirst(0);
                }}
                className={
                  first === 0
                    ? "py-2 px_3 py-md-3 px-33 br_36px border_1px_white bg-transparent clrr_white text_uppercase purple_bglinear_on_hover purple_bglinear fs_3xsm"
                    : "py-2 px_3 py-md-3 px-33 br_36px border_1px_white bg-transparent clrr_white text_uppercase purple_bglinear_on_hover fs_3xsm"
                }
              >
                Start building
              </button>
              <button
                onClick={() => {
                  setfirst(1);
                }}
                className={
                  first === 1
                    ? "py-2 px_3 py-md-3 px-33 br_36px border_1px_white bg-transparent clrr_white text_uppercase purple_bglinear_on_hover purple_bglinear ms-3 fs_3xsm"
                    : "py-2 px_3 py-md-3 px-33 br_36px border_1px_white bg-transparent clrr_white text_uppercase purple_bglinear_on_hover ms-3 fs_3xsm"
                }
              >
                Read docs
              </button>
            </div>
            <div className="pt-md-5 pt-1">
              <p className="ff_helvetica fw_400 fs_3xsm clr_blue text_uppercase pt-5">
                Powering tools and integrations from companies all around the
                world
              </p>
            </div>
          </div>
          {/* <marquee scrollamount="20" className="mt-4">
            
          </marquee> */}
          <Marquee speed={100}>
            <img src={imgone} alt="imgone" />
            <img src={imgtwo} alt="imgtwo" className="ms-5" />
            <img src={imgthree} alt="imgthree" className="ms-5" />
            <img src={imgfour} alt="imgfour" className="ms-5" />
            <img src={imgfive} alt="imgfive" className="ms-5" />
            <img src={imgsix} alt="imgsix" className="ms-5" />
            <img src={imgseven} alt="imgseven" className="ms-5" />
          </Marquee>
        </Container>
      </div>
    </header>
  );
};

export default Header;

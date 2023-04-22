import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/img/secpage_heroimg.png";
import comnt from "../assets/images/img/commnt.png";
const SecondHero = () => {
  return (
    <section>
      <Container className="py-lg-5 py-xl-0">
        <Row className=" justify-content-between align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className=" ff_helvetica fw_400 fs_7xl clrr_white">
              Developer Resources
            </h1>
            <p className=" ff_helvetica fw_400 fs_md clr_c4">
              A manual for joining the Solana <br /> ecosystem. By builders for
              builders.
            </p>
            <div className="d-flex mt-lg-5 mt-3 justify-content-center justify-content-lg-start">
              <button className=" ff_roboto fw_400 fs_3xsm clr_black  bg-transparent clrr_white border_1px_white_br_24 br_24 p_12_22 bg_green">
                Build Now
              </button>
              <button className="ms-2 ff_roboto fw_400 fs_3xsm clr_black  bg-transparent clrr_white border_1px_white_br_24 br_24 p_12_22 bg_green">
                Stack Exchange <img src={comnt} alt="comnt" className="ps-2" />
              </button>
            </div>
          </Col>
          <Col lg={6}>
            <div className=" position-relative">
              <div className="purple_blur_bg position-absolute top-0 start-0"></div>
              <img
                src={mainimg}
                alt="mainimg"
                className="w_100_max1400 ps-lg-5"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SecondHero;

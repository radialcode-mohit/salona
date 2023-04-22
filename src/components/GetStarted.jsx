import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rightcrcle from "../assets/images/img/started/rightcrcle.png";
import one from "../assets/images/img/cards/1.png";
import two from "../assets/images/img/cards/2.png";
import three from "../assets/images/img/cards/3.png";
import four from "../assets/images/img/cards/4.png";
import five from "../assets/images/img/cards/5.png";
import six from "../assets/images/img/cards/IMAGE.png";
const GetStarted = () => {
  return (
    <section>
      <Container>
        <div>
          <p className=" ff_helvetica  fw_400 fs_xl clrr_white mb-0">
            Get started.
          </p>
          <p className=" ff_helvetica fw_400 fs_4sm clr_c4">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
        </div>
        <div className="bgimgstarted_section p-lg-5 mt-4 py-5 box_hover_brightness cur_poi">
          <div className="p-lg-5">
            <span className=" ff_helvetica fw_400 fs_xsm clrr_white bg_prple_br_16 px-2 py-1">
              17 Chapters
            </span>
            <p className=" ff_helvetica fw_400 fs_2xl clrr_white mt-3">
              Solana Development Course
            </p>
            <p className=" ff_helvetica fw_400 fs_2sm clrr_white mt-4">
              Quickstart your Solana development starting <br /> from nothing to
              complex programs.
            </p>
            <a href="#">
              {" "}
              <img src={rightcrcle} alt="rightcrcle" className="mt-4" />
            </a>
          </div>
          <div className="pb-lg-5"></div>
        </div>
        <Row className="pb-5">
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cur_poi box_hover_brightness">
              <img className="w-100" src={one} alt="image_1" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  {" "}
                  <span className=" fs_xsm text-white small_bg ff_helvetica fw_400 bg_prple_br_16 px-2 py-1   ">
                    14 Chapters
                  </span>
                  <p className="ff_helvetica fw_400  fs_2sm text-white mt-2 mb-0">
                    Buildspace
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>{" "}
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cur_poi box_hover_brightness">
              <img className="w-100" src={two} alt="image_2" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  {" "}
                  <span className=" fs_xsm text-white small_bg ff_helvetica fw_400 bg_prple_br_16 px-2 py-1   ">
                    12 Chapters
                  </span>
                  <p className="ff_helvetica fw_400  fs_2sm text-white mt-2 mb-0">
                    Solana Bytes
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>{" "}
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cur_poi box_hover_brightness">
              <img className="w-100" src={three} alt="image_3" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  {" "}
                  <span className=" fs_xsm text-white small_bg ff_helvetica fw_400 bg_prple_br_16 px-2 py-1   ">
                    1 Chapters
                  </span>
                  <p className="ff_helvetica fw_400  fs_2sm text-white mt-2 mb-0">
                    Scaffold Series
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>{" "}
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cur_poi box_hover_brightness">
              <img className="w-100" src={four} alt="image_4" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  {" "}
                  <span className=" fs_xsm text-white small_bg ff_helvetica fw_400 bg_prple_br_16 px-2 py-1   ">
                    3 Chapters
                  </span>
                  <p className="ff_helvetica fw_400  fs_2sm text-white mt-2 mb-0">
                    Freecodecamp Solana Course
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>{" "}
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cur_poi box_hover_brightness">
              <img className="w-100" src={five} alt="image_5" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  {" "}
                  <span className=" fs_xsm text-white small_bg ff_helvetica fw_400 bg_prple_br_16 px-2 py-1   ">
                    167 Chapters
                  </span>
                  <p className="ff_helvetica fw_400  fs_2sm text-white mt-2 mb-0">
                    Solana Development by Knox
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>{" "}
          <Col lg={4} sm={6} xs={10} className="m-auto mt-4">
            <div className=" position-relative cur_poi box_hover_brightness">
              <img className="w-100" src={six} alt="image_6" />
              <div className="d-flex justify-content-between align-items-center position-absolute w-100 botom_10">
                <div className="ms-4">
                  {" "}
                  <span className=" fs_xsm text-white small_bg ff_helvetica fw_400 bg_prple_br_16 px-2 py-1   ">
                    8 Chapters
                  </span>
                  <p className="ff_helvetica fw_400  fs_2sm text-white mt-2 mb-0">
                    Solana Bootcamp
                  </p>
                </div>
                <img className="me-4" src={rightcrcle} alt="rightcrcle" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStarted;

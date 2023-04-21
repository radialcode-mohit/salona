import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footeerrlogo from "../assets/images/img/footer/mainloggo.png";
import discord from "../assets/images/img/footer/discord.png";
import github from "../assets/images/img/footer/github.png";
import globe from "../assets/images/img/footer/globe.png";
import redit from "../assets/images/img/footer/redit.png";
import telegram from "../assets/images/img/footer/telegram.png";
import tweter from "../assets/images/img/footer/tweter.png";
import utube from "../assets/images/img/footer/utube.png";
const Footer = () => {
  return (
    <footer className="bg_footer_ py-5">
      <Container className="py-4">
        <Row className=" justify-content-between">
          <Col md={4}>
            <div>
              <img src={footeerrlogo} alt="footeerrlogo" />
              <p className="mb-4 ff_helvetica fw_400 fs_4xsm clrr_white mt-3">
                Managed by Solana Foundation
              </p>
              <div className="d-flex">
                <a href="#">
                  <img src={utube} alt="utube" />
                </a>
                <a href="#">
                  <img src={tweter} alt="tweter" className="ms-2 ps-2" />
                </a>
                <a href="#">
                  <img src={discord} alt="discord" className="ms-2 ps-2" />
                </a>
                <a href="#">
                  <img src={redit} alt="redit" className="ms-2 ps-2" />
                </a>
                <a href="#">
                  <img src={github} alt="github" className="ms-2 ps-2" />
                </a>
                <a href="#">
                  <img src={telegram} alt="telegram" className="ms-2 ps-2" />
                </a>
              </div>
              <p className=" ff_helvetica fw_400 fs_4xsm  mt-3 clr_grey_footer py-3">
                ©2023Solana Foundation. All rights reserved.
              </p>
            </div>
          </Col>
          <Col md={7} lg={6}>
            <Row className=" justify-content-md-evenly justify-content-xxl-between">
              <Col xs={6} md={4} xxl={3}>
                <ul className="mb-0 ps-0">
                  <li className="ff_helvetica fw_400 fs_4xsm clrr_white text_uppercase ">
                    Solana
                  </li>
                  <li className="mt_13">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Grants
                    </a>
                  </li>
                  <li className="mt_11">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Break Solana
                    </a>
                  </li>
                  <li className="mt_11">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Media Kit
                    </a>
                  </li>
                  <li className="mt_11">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mt_11">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={4} xxl={3}>
                <ul className="mb-0 ps-0">
                  <li className="ff_helvetica fw_400 fs_4xsm clrr_white text_uppercase ">
                    Get Connected
                  </li>
                  <li className="mt_13">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Ecosystem
                    </a>
                  </li>
                  <li className="mt_11">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mt_11">
                    <a
                      href="#"
                      className="ff_helvetica fw_400 fs_3xsm  clr_grey_footer clrwhite_on_hover"
                    >
                      Newsletter
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={4} xxl={3} className="mt-4 mt-md-0">
                <div className="d-flex align-items-center cur_poi">
                  <img src={globe} alt="globe" />
                  <p className="mb-0 text_uppercase ff_helvetica fw_400 fs_3xsm clr_grey_footer ms-1 clrwhite_on_hover">
                    en
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

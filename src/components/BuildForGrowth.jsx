import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/img/buildforgrwth/mainimg.png";
import ok from "../assets/images/img/buildforgrwth/okay.png";
import anybody from "../assets/images/img/buildforgrwth/anybodies.png";
import clay from "../assets/images/img/buildforgrwth/clay.png";
import monkey from "../assets/images/img/buildforgrwth/monkey.png";
import shib from "../assets/images/img/buildforgrwth/shib.png";
const BuildForGrowth = () => {
  const [first, setfirst] = useState(0);
  return (
    <section>
      <Container>
        <div className="d-flex align-items-center justify-content-between  flex-column flex-lg-row">
          <div>
            <p className="ff_helvetica fw_400 fs_2xl clrr_white mb-0">
              Build for growth.
            </p>
          </div>
          <div>
            <div className="mt-lg-0 max_w_300px_overf_x_scrl mt-3 scroll">
              <div className="d-flex align-items-center justify-content-lg-end gap-4  max_w_589 py-3 py-lg-0">
                <div
                  onClick={() => {
                    setfirst(0);
                  }}
                  className={
                    first === 0
                      ? "bg_111 border_purple border_radius_15 py10_px14 cur_poi"
                      : "bg_111  border_radius_15 py10_px14 cur_poi border_111"
                  }
                >
                  <p className="ff_helvetica fw_400 fs_3xsm mb-0 clrr_white">
                    NFTs
                  </p>
                </div>

                <div
                  onClick={() => {
                    setfirst(4);
                  }}
                  className={
                    first === 4
                      ? "bg_111 border_purple border_radius_15 py10_px14 cur_poi"
                      : "bg_111  border_radius_15 py10_px14 cur_poi border_111"
                  }
                >
                  <p className="ff_helvetica fw_400 fs_3xsm mb-0 clrr_white">
                    DeFi
                  </p>
                </div>

                <div
                  onClick={() => {
                    setfirst(1);
                  }}
                  className={
                    first === 1
                      ? "bg_111 border_purple border_radius_15 py10_px14 cur_poi"
                      : "bg_111  border_radius_15 py10_px14 cur_poi border_111"
                  }
                >
                  <p className="ff_helvetica fw_400 fs_3xsm mb-0 clrr_white">
                    Payments
                  </p>
                </div>

                <div
                  onClick={() => {
                    setfirst(2);
                  }}
                  className={
                    first === 2
                      ? "bg_111 border_purple border_radius_15 py10_px14 cur_poi"
                      : "bg_111  border_radius_15 py10_px14 cur_poi border_111"
                  }
                >
                  <p className="ff_helvetica fw_400 fs_3xsm mb-0 clrr_white">
                    Gaming
                  </p>
                </div>

                <div
                  onClick={() => {
                    setfirst(3);
                  }}
                  className={
                    first === 3
                      ? "bg_111 border_purple border_radius_15 py10_px14 cur_poi"
                      : "bg_111  border_radius_15 py10_px14 cur_poi border_111"
                  }
                >
                  <p className="ff_helvetica fw_400 fs_3xsm mb-0 clrr_white">
                    DAOs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_lightgrey mt-4">
          <Row className=" align-items-center ">
            <Col lg={6} className="text-center text-lg-start py-3 py-lg-0">
              <img src={mainimg} alt="mainimg" className="w-100 max__w_658px" />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-5 text-center text-lg-start p-3 pt-0 p-lg-0">
                <img src={anybody} alt="anybody" />
                <p className="ff_helvetica fw_400 fs_md clrr_white mb-0 mt-3 pe-lg-5">
                  It’s time to bridge the digital and physical. Anybodies helps
                  established brands like Toys’R’Us connect real-life places and
                  products with NFTs.
                </p>
                <div className="d-flex mt-3 justify-content-center justify-content-lg-start">
                  <p>
                    <a
                      href="#"
                      className="clr_purple ff_helvetica fw_400 fs_4sm clr_purple"
                    >
                      Learn more about
                    </a>
                  </p>
                  <p className="ms-2">
                    <a
                      href="#"
                      className="clr_purple ff_helvetica fw_400 fs_4sm clr_purple"
                    >
                      NFTs on Solana
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mx_12 mt-3">
          <Row className=" align-items-center imgs_bg_rgba br_16 py-2">
            <Col xs={6} md={3} className="text-center">
              <img src={clay} alt="clay" />
            </Col>
            <Col xs={6} md={3} className="text-center">
              <img src={monkey} alt="monkey" />
            </Col>
            <Col xs={6} md={3} className="text-center mt-3 mt-lg-0">
              <img src={shib} alt="shib" />
            </Col>
            <Col xs={6} md={3} className="text-center mt-3 mt-lg-0">
              <img src={ok} alt="ok" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default BuildForGrowth;

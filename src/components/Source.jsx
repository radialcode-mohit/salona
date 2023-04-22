import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrow from "../assets/images/img/deeper/arrow.png";
import arightarrow from "../assets/images/img/solar/rightarrow.svg";
import changelog from "../assets/images/img/solar/changelog.png";
const Source = () => {
  return (
    <section className="blacklinear_bg py-5">
      <Container className="py-3">
        <div>
          <p className=" ff_helvetica fw_400 fs_3lg clrr_white">
            Go to the source.
          </p>
          <p className=" ff_helvetica fw_400 fs_4sm clr_c4">
            Read the documentation for Solana and popular tools.
          </p>
        </div>
        <Row>
          <Col lg={6}>
            <div className="me-2">
              <div className="d-flex justify-content-between border_btm py-4 align-items-center">
                <span className=" ff_helvetica fw_400 fs_lg clrr_white">
                  Solana Docs
                </span>
                <button className=" ff_roboto fw_400 fs_3xsm clrr_white border_1px_white_br_24 bg-transparent viewall_btn_modi text_uppercase">
                  View all{" "}
                  <span className="mx-3">
                    <img src={arrow} alt="arrow" />
                  </span>
                </button>
              </div>
              <p className=" ff_helvetica fw_400 fs_4sm clrr_white pe-5 pt-4">
                Learn how Solana works and get a high-level understanding of
                Solana's architecture.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ms-2">
              <div className="d-flex justify-content-between border_btm py-4 align-items-center">
                <span className=" ff_helvetica fw_400 fs_lg clrr_white">
                  Metaplex Docs
                </span>
                <button className=" ff_roboto fw_400 fs_3xsm clrr_white border_1px_white_br_24 bg-transparent viewall_btn_modi text_uppercase">
                  View all{" "}
                  <span className="mx-3">
                    <img src={arrow} alt="arrow" />
                  </span>
                </button>
              </div>
              <p className=" ff_helvetica fw_400 fs_4sm clrr_white pe-5 pt-4">
                Learn what you build with Metaplex, make the process of creating
                and launching NFTs easier.
              </p>
            </div>
          </Col>
          <Col lg={6} className="pt-lg-5 mt-5">
            <p className=" ff_helvetica fw_400 fs_2xl clrr_white pb-3">
              Solana Changelog
            </p>
            <p className=" ff_helvetica fw_400 fs_4sm clrr_white pb-5">
              Some more Solana changes from Jacob & Joe. Subscribe to the
              newsletter: https://solana.us17.list-manage.com/s... Proposal -
              Priced Compute Units: ...
            </p>
            <p className="border_1px_white_br_24 cur_poi d-inline-block ps-3 mb-0">
              <a
                href="#"
                className=" ff_roboto fw_400  fs_3xsm  clrr_white text_uppercase"
              >
                Latest episode
                <img
                  src={arightarrow}
                  alt="arightarrow"
                  className="pe-4 ps-2 py-1"
                />
              </a>
            </p>
          </Col>
          <Col lg={6} className="mt-lg-5 pt-5">
            <img src={changelog} alt="cahngelog" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Source;

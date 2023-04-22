import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import utube from "../assets/images/img/update/utube.png";
import cast from "../assets/images/img/update/podcast.png";
const DevloperUpdate = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="bg_darkgrey_br_14 p-md-5 p-2">
              <p className=" ff_helvetica fw_400 fs_3lg clrr_white">
                Solana Developer Update
              </p>
              <p className=" ff_helvetica fw_400 fs_sm clr_c4 pe-md-5 pt-md-4 pb-md-3">
                Sign up to the newsletter and learn about new resources, new
                commits, new proposals, and more.
              </p>
              <div className="br_800 bg_black_lg d-flex flex-column flex-md-row justify-content-between mt-5 max_ w_495">
                <input
                  type="email"
                  placeholder="Email"
                  className=" ff_roboto fw_600 fs_3xsm clr_grey_84 bg-black border-0 br_800 w_80per outline_0 py-4 px-3"
                />
                <button className=" ff_roboto fw_400 fs_3xsm clr_black bg_lemonclr p_13_21 br_800 my-2 me-2">
                  Sign up
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="bg_darkgrey_br_14 p-md-5 p-2 h-100">
              <p className=" ff_helvetica fw_400 fs_3lg clrr_white">
                Even more resources
              </p>
              <p className=" ff_helvetica fw_400 fs_sm clr_c4 pe-md-5 pt-md-4 pb-md-3">
                More videos, more episodes. Discussions between industry leaders
                in both blockchain and technology, our team, and community
                developers..
              </p>
              <div className=" d-flex  mt-5">
                <button className=" bg-transparent clrr_white ff_roboto fw_400  fs_3xsm py-2 ps_45 ps_24  text-center border_1px_white_br_24">
                  YouTube{" "}
                  <img src={utube} alt="utube" className="ms-2 pe_45 pe_20" />
                </button>
                <button className=" bg-transparent clrr_white ff_roboto fw_400  fs_3xsm py-2 ps_45 ps_24 text-center border_1px_white_br_24 ms-4">
                  Podcast{" "}
                  <img src={cast} alt="cast" className="ms-2 pe_45 pe_20" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DevloperUpdate;

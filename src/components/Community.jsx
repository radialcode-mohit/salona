import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Community = () => {
  return (
    <section className="py-md-5 bg_line_milloin">
      <Container className="py-3 py-md-5">
        <Row className=" justify-content-between">
          <Col lg={4}>
            <div className=" pt-lg-5 text-center text-lg-start">
              <p className="mb-0 ff_helvetica fw_400 fs_xl clrr_white pt-3">
                {" "}
                Join a community
              </p>
              <p className="ff_helvetica fw_400 fs_xl clrr_white">
                of millions
              </p>
            </div>
          </Col>
          <Col lg={7} className="text-center text-lg-start">
            <div className="ps-lg-5">
              <p className="blue_bg_linear ff_helvetica fw_400 fs_8xl mb-0">
                11.5M+
              </p>
              <p className=" ff_roboto fw_400 fs_4xsm clr_c4">
                Active accounts
              </p>
            </div>
            <div className="mt-5 ps-lg-5">
              <p className="millon_bg_linear_21 ff_helvetica fw_400 fs_8xl mb-0">
                21.9M
              </p>
              <p className=" ff_roboto fw_400 fs_4xsm clr_c4">NFTs minted</p>
            </div>
            <div className="mt-5 ps-lg-5">
              <p className="doller_bg_linear ff_helvetica fw_400 fs_8xl mb-0">
                $0.00025
              </p>
              <p className=" ff_roboto fw_400 fs_4xsm clr_c4">
                Average cost per transaction
              </p>
            </div>
          </Col>
        </Row>
        <div className="pt-lg-5"></div>
        <div className="pt-lg-5"></div>
        {/* second row  */}
        <Row className="py-lg-5">
          <Col lg={4}>
            {" "}
            <div className=" pt-lg-5 text-center text-lg-start">
              <p className="mb-0 ff_helvetica fw_400 fs_xl clrr_white pt-3">
                {" "}
                Made for
              </p>
              <p className="ff_helvetica fw_400 fs_xl clrr_white">
                mass adoption
              </p>
              <span className=" ff_roboto fw_400 fs_4xsm clr_c4 text_uppercase bluedot ps-2">
                Live data
              </span>
            </div>
          </Col>
          <Col lg={8}>
            <Row className="">
              <Col md={6}>
                <Row className="flex-column trans_trans_y_80">
                  <Col className="mt-3 mt-md-5  mt-lg-0">
                    <div className="bg_rbga_sec2 p-4">
                      <p className=" ff_helvetica fw_400 fs_4md clrr_white fast ps-3">
                        Fast
                      </p>
                      <p className=" ff_helvetica fw_400 fs_sm clr_c4 pe-5">
                        Don’t keep your users waiting. Solana has block times of
                        400 milliseconds — and as hardware gets faster, so will
                        the network.
                      </p>
                      <p className="bluedot ff_helvetica fw_400 fs_4md clrr_white ps-2">
                        3,969
                      </p>
                      <p className=" ff_roboto fw_400 fs_4xsm clr_c4">
                        Transactions per second
                      </p>
                    </div>
                  </Col>
                  <Col className="mt-3 mt-md-5 mt-lg-0">
                    <div className="bg_rbga_sec2 p-4">
                      <p className=" ff_helvetica fw_400 fs_4md clrr_white scalable ps-3">
                        Scalable
                      </p>
                      <p className=" ff_helvetica fw_400 fs_sm clr_c4 pe-5">
                        Get big, quick. Solana is made to handle thousands of
                        transactions per second, and fees for both developers
                        and users remain less than $0.01.
                      </p>
                      <p className="bluedot ff_helvetica fw_400 fs_4md clrr_white ps-2">
                        163,077,581,394
                      </p>
                      <p className=" ff_roboto fw_400 fs_4xsm clr_c4">
                        Total transactions
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row className="flex-column">
                  <Col className="mt-3 mt-md-5  mt-lg-0">
                    <div className="bg_rbga_sec2 p-4">
                      <p className=" ff_helvetica fw_400 fs_4md clrr_white decentralized ps-3">
                        Decentralized
                      </p>
                      <p className=" ff_helvetica fw_400 fs_sm clr_c4 pe-5">
                        The Solana network is validated by thousands of nodes
                        that operate independently of each other, ensuring your
                        data remains secure and censorship resistant.
                      </p>
                      <p className="bluedot ff_helvetica fw_400 fs_4md clrr_white ps-2">
                        1,675
                      </p>
                      <p className=" ff_roboto fw_400 fs_4xsm clr_c4">
                        Validator nodes
                      </p>
                    </div>
                  </Col>
                  <Col className="mt-3 mt-md-5 mt-lg-0">
                    <div className="bg_rbga_sec2 p-4">
                      <p className=" ff_helvetica fw_400 fs_4md clrr_white energy ps-3">
                        Energy Efficient
                      </p>
                      <p className=" ff_helvetica fw_400 fs_sm clr_c4 pe-5">
                        Solana’s proof of stake network and other innovations
                        minimize its impact on the environment. Each Solana
                        transaction uses about the same energy as a few Google
                        searches.
                      </p>
                      <p className=" ff_helvetica fw_400 fs_4md clrr_white ps-2">
                        0%
                      </p>
                      <p className=" ff_roboto fw_400 fs_4xsm clr_c4">
                        Net carbon impact
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Community;

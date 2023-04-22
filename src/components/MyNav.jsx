import React, { useState } from "react";

import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/img/navbar/pagelogo.png";

import downicon from "../assets/images/img/navbar/dropdownimg.png";
import { Link } from "react-router-dom";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <div>
      <nav className="rgba_bg py-3">
        <Container>
          <div className="d-flex justify-content-between">
            <a href="#">
              {" "}
              <Link to="/">
                {" "}
                <img src={pagelogo} alt="pagelogo" className="w-100" />
              </Link>
            </a>
            <div
              className={
                first
                  ? " d-flex mobile_nav_modification flex-column flex-lg-row left_minus_100per z_index_500 text-center text-lg-start"
                  : "d-flex mobile_nav_modification flex-column flex-lg-row left_0 z_index_500 text-center text-lg-start"
              }
            >
              {/* <DropdownButton
                id="dropdown-basic-button"
                title="Learn"
                className="bg_unset ff_helvetica fw_400 fs_sm clr_grey clr_max_white mt-5 mt-lg-0"
              >
                <Dropdown.Item
                  href="#/action-1"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Another action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Something else
                </Dropdown.Item>
              </DropdownButton> */}
              <div class="downarrow">
                <button class="down clr_white  ff_helvetica d-flex align-items-center">
                  <p className="p-0 m-0 text-center text-lg-start"> Learn</p>
                  <img
                    className=" ps-1 d-none d-lg-block"
                    src={downicon}
                    alt="downicon"
                  />
                </button>
                <div class="links">
                  <a href="#">Intro to NFT</a>
                  <a href="#">Enviromental </a>
                  <a href="#">Blockchain</a>
                </div>
              </div>
              <div class="downarrow   ms-lg-5">
                <button class="down clr_white  ff_helvetica d-flex align-items-center">
                  <p className="p-0 m-0 text-center text-lg-start"> Build</p>
                  <img
                    className=" ps-1 d-none d-lg-block"
                    src={downicon}
                    alt="downicon"
                  />
                </button>
                <div class="links">
                  <Link to="/second">
                    <a href="#">Intro to NFT</a>
                  </Link>
                  <a href="#">Enviromental </a> <a href="#">Blockchain</a>
                </div>
              </div>
              <div class="downarrow ms-lg-5">
                <button class="down clr_white  ff_helvetica d-flex align-items-center">
                  <p className="p-0 m-0 text-center text-lg-start"> Network</p>
                  <img
                    className=" ps-1 d-none d-lg-block"
                    src={downicon}
                    alt="downicon"
                  />
                </button>
                <div class="links">
                  <a href="#">Enviromental </a>
                  <a href="#">Blockchain</a> <a href="#">Intro to NFT</a>{" "}
                </div>
              </div>
              <div class="downarrow ms-lg-5">
                <button class="down clr_white  ff_helvetica d-flex align-items-center">
                  <p className="p-0 m-0 text-center text-lg-start">
                    {" "}
                    Community
                  </p>
                  <img
                    className=" ps-1 d-none d-lg-block"
                    src={downicon}
                    alt="downicon"
                  />
                </button>
                <div class="links">
                  <a href="#">Blockchain</a> <a href="#">Intro to NFT</a>{" "}
                  <a href="#">Enviromental </a>
                </div>
              </div>
              {/* <DropdownButton
                id="dropdown-basic-button"
                title="Build"
                className="bg_unset ff_helvetica fw_400 fs_sm clr_grey mx-lg-4 mt-5 mt-lg-0"
              >
                <Dropdown.Item
                  href="#/action-1"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Another action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Something else
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="Network"
                className="bg_unset ff_helvetica fw_400 fs_sm clr_grey mt-5 mt-lg-0"
              >
                <Dropdown.Item
                  href="#/action-1"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Another action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Something else
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-basic-button"
                title="Community"
                className="bg_unset ff_helvetica fw_400 fs_sm clr_grey ms-lg-4 mt-5 mt-lg-0"
              >
                <Dropdown.Item
                  href="#/action-1"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Another action
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="ff_helvetica fw_400 fs_sm clr_grey"
                >
                  Something else
                </Dropdown.Item>
              </DropdownButton> */}
            </div>
            <a
              href="#"
              className="navicon_container d-lg-none"
              onClick={() => {
                setfirst(!first);
              }}
            >
              <span className="navicon"></span>
              <span className="navicon my-2"></span>
              <span className="navicon"></span>
            </a>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default MyNav;

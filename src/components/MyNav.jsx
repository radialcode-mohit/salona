import React, { useState } from "react";

import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/img/navbar/pagelogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
              <img src={pagelogo} alt="pagelogo" className="w-100" />
            </a>
            <div
              className={
                first
                  ? " d-flex mobile_nav_modification flex-column flex-lg-row left_minus_100per z_index_500 text-center text-lg-start"
                  : "d-flex mobile_nav_modification flex-column flex-lg-row left_0 z_index_500 text-center text-lg-start"
              }
            >
              <DropdownButton
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
              </DropdownButton>
              <DropdownButton
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
              </DropdownButton>
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

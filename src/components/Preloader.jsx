import React from "react";
import { Container } from "react-bootstrap";
import img from "../assets/images//img/preloader.png";
const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".none").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <section className="">
      <div className="none">
        <div className="text-center min-vh-100 d-flex align-items-center z_index_500 position-fixed start-0 top-0 bg-black w-100">
          <Container>
            <img src={img} alt="img" className="preloader_animation" />
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Preloader;

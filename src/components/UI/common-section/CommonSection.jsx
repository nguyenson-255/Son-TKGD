import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";
import banner from "../../../assets/images/banner1.jpg";

const CommonSection = () => {
  return (
    <section className="common__section">
      <Container>
        <img src={banner} alt="banner-img"/>
      </Container>
    </section>
  );
};

export default CommonSection;

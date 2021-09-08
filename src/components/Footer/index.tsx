import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "./styles";
import { IoHeart } from "react-icons/io5";

const Footer: React.FC = () => {
  AOS.init();

  return (
    <Container>
      <div>
        <strong data-aos="fade-left" data-aos-delay="100">
          React
        </strong>
        <strong data-aos="fade-left" data-aos-delay="400">
          Typescript
        </strong>
        <strong data-aos="fade-left" data-aos-delay="300">
          Aos
        </strong>
        <strong data-aos="fade-left" data-aos-delay="500">
          react-icons
        </strong>
        <strong data-aos="fade-left" data-aos-delay="200">
          styled-components
        </strong>
        <strong data-aos="fade-left" data-aos-delay="500">
          Sass
        </strong>
      </div>

      <span>
        Criado com <IoHeart className="red" /> por Lucas Vinicius
      </span>
    </Container>
  );
};

export default Footer;

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container, SectionOne, SectionTwo } from "./styles";

const Main: React.FC = () => {
  AOS.init();

  return (
    <Container>
      <SectionOne>
        <h1>
          <span>Acordar.</span>
          <span>Codar.</span>
          <span>Dormir.</span>
        </h1>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quas
          tempora accusantium consequuntur fugiat libero doloremque molestias
        </h2>
      </SectionOne>

      <SectionTwo>
        <p data-aos="fade-up">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptatem laudantium fugiat neque architecto iste perferendis eius et
          quaerat mollitia pariatur doloremque eaque, nulla quibusdam natus
          reprehenderit, error omnis voluptatum. Lorem, ipsum dolor sit amet
          <br />
          <br />
          consectetur adipisicing elit. Culpa voluptatem laudantium fugiat neque
          architecto iste perferendis eius et quaerat mollitia pariatur
          doloremque eaque, nulla quibusdam natus reprehenderit, error omnis
          voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Culpa voluptatem laudantium fugiat neque architecto iste perferendis
          eius et quaerat mollitia pariatur doloremque eaque, nulla quibusdam
          natus reprehenderit, error omnis voluptatum.
        </p>
        <img
          src="https://images.pexels.com/photos/1813157/pexels-photo-1813157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          data-aos="fade-left"
        />
      </SectionTwo>

      <SectionTwo>
        <img
          src="https://images.pexels.com/photos/2208207/pexels-photo-2208207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500"
          alt=""
          data-aos="fade-right"
        />
        <p data-aos="fade-up">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptatem laudantium fugiat neque architecto iste perferendis eius et
          quaerat mollitia pariatur doloremque eaque, nulla quibusdam natus
          reprehenderit, error omnis voluptatum. Lorem, ipsum dolor sit amet
          <br />
          <br />
          consectetur adipisicing elit. Culpa voluptatem laudantium fugiat neque
          architecto iste perferendis eius et quaerat mollitia pariatur
          doloremque eaque, nulla quibusdam natus reprehenderit, error omnis
          voluptatum. Lorem,
          <br />
          <br />
          ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem
          laudantium fugiat neque architecto iste perferendis eius et quaerat
          mollitia pariatur doloremque eaque, nulla quibusdam natus
          reprehenderit, error omnis voluptatum.
        </p>
      </SectionTwo>
    </Container>
  );
};

export default Main;

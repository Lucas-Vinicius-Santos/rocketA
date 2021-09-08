import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <Header />

      <Main></Main>

      <Footer></Footer>
    </Container>
  );
};

export default Page;

import React from "react";

import { Menu, Logo, NavBar } from "./styles";
import { IoRocketSharp } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <Menu>
      <Logo>
        <IoRocketSharp className="icon" />A
      </Logo>
      <NavBar>
        <span className="link--header">Home</span>
        <span className="link--header">Conteúdo</span>
        <span className="link--header">Sobre</span>
      </NavBar>
    </Menu>
  );
};

export default Header;

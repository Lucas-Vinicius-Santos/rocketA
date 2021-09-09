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
        <a href="#home" className="link--header">
          Home
        </a>
        <a href="#main" className="link--header">
          Conteúdo
        </a>
        <a href="#footer" className="link--header">
          Sobre
        </a>
      </NavBar>
    </Menu>
  );
};

export default Header;

import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--gray);
  padding: 0 20%;
  /* position: fixed; */
  z-index: 999;
  background: transparente;
  backdrop-filter: blur(4px);

  @media (max-width: 500px) {
    padding: 0 10%;
  }
`;

export const Logo = styled.div`
  font-size: 32px;
  display: flex;
  text-shadow: -2px 2px 2px rgba(255, 250, 250, 0.4);
`;

export const NavBar = styled.div`
  display: flex;

  > a {
    padding: 24px 8px;
    text-align: center;
    transition: all 0.2s ease-out;
    text-decoration: none;
    text-shadow: 2px 2px 2px rgba(255, 250, 250, 0.4);
    outline: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--gray);
  padding: 0 20%;
  position: fixed;
  z-index: 999;
  background: transparente;
  backdrop-filter: blur(4px);
`;

export const Logo = styled.div`
  font-size: 32px;
`;

export const NavBar = styled.div`
  display: flex;

  > span {
    padding: 24px 8px;
    text-align: center;
    transition: all 0.2s ease-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;

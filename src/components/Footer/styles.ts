import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  width: 100%;
  background: var(--black);
  opacity: 0.8;
  border-top: 1px solid var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    gap: 2rem 0;
    margin-top: -38px;
  }

  > div > strong {
    font-weight: 600;
    font-size: 1.8rem;
    color: var(--white);
  }

  > span {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 20px;
    right: 20px;

    .red {
      fill: #f91880;
      margin: 0 4px;
    }
  }

  @media (max-width: 500px) {
    > div > strong {
      font-size: 1.2rem;
    }
  }
`;

import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

const textCycle = keyframes`
  0%, 55% {
    filter: brightness(0) invert(1);
  }
  11%, 33% {
    filter: none;
  }
`;

export const SectionHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > h1 {
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    font-family: sans-serif;
    font-weight: 800;
    letter-spacing: -0.5rem;
    line-height: 7rem;
    margin-top: 4rem;

    > span {
      filter: brightness(0) invert(1);

      padding: 2px 6.4px;
      background: linear-gradient(90deg, purple, blue);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: ${textCycle} 10s ease-out infinite;
    }

    > span:nth-child(2) {
      animation-delay: 3.33s;
    }
    > span:nth-child(3) {
      animation-delay: 6.66s;
    }
  }
  > h2 {
    font-size: 1.1rem;
    max-width: 60%;
    margin: 0 auto 5rem auto;
    text-align: center;
    font-weight: 300;
  }

  @media (max-width: 500px) {
    > h1 {
      line-height: 6rem;
    }

    > h2 {
      margin: 0 auto 5rem auto;
      text-align: center;
    }
  }
  @media (max-width: 380px) {
    > h1 {
      font-size: 5rem;
    }

    > h2 {
      margin: 0 auto 5rem auto;
      text-align: center;
    }
  }
`;

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 5vh auto 10vh auto;

  > p {
    max-width: 400px;
  }

  > img {
    border: 5px solid var(--gray);
    border-radius: 4px;
    width: 300px;
    height: 450px;
  }

  @media (max-width: 1000px) {
    margin: 5vh auto;
    flex-direction: column;
    gap: 5vh;
    overflow: hidden;

    > img {
      width: 260px;
      height: 390px;
    }
  }
`;

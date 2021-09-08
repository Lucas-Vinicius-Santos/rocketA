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

export const SectionOne = styled.div`
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
    margin: 5rem auto 0 auto;
    text-align: center;
    font-weight: 300;
  }
`;

export const SectionTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 30vh auto;

  > p {
    max-width: 400px;
  }

  > img {
    border: 5px solid var(--gray);
    border-radius: 4px;
    width: 300px;
    height: 450px;
  }
`;
// @types/aos

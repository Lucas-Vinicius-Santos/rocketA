import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: sans-serif;
    color: var(--white);
  }

  :root {
    --primary: #1a1a1a;
    --gray: #7a7a7a;
    --white: #f1f1f1;
    --black: #121212;
  }
`;

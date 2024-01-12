import { createGlobalStyle } from "styled-components";
<link
  href="https://fonts.googleapis.com/css2?family=Dosis:wght@500;600&display=swap"
  rel="stylesheet"
></link>;

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-image: linear-gradient(90deg, #410076, #8820dd);
    color: #e8e8e8;
    font-family: 'Dosis', sans-serif;
  }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --nemo: #ff4a11;
    --granite: #252629;
    --water: #f3f5f9;
    --foam: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
    
  ul {
    margin: 0;
    padding: 0;
  }
  
  #__next {
    display: grid;
    min-height: 100vh;
    place-items: center;
  }

`;

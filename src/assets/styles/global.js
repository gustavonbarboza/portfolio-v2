import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
    font-size: 16px;
    padding: 0 10%;
  }

  button {
    cursor: pointer;
  }
`;

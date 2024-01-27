import { createGlobalStyle } from 'styled-components';
import { inter } from "../app/font";

const GlobalStyles: any = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${inter}
  }

  header {
    display: flex;
    width: 100%;
    height: 104px;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
  }
`;

export default GlobalStyles;

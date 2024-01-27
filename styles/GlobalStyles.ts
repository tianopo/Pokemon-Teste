import { createGlobalStyle } from 'styled-components';
import { colorsX } from './Cores';

const GlobalStyles: any = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  header {
    display: flex;
    width: 100%;
    height: 104px;
    justify-content: space-around;
    align-items: center;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import milkyWay from './app/images/milkyWay_L.jpg';

const GlobalStyle = createGlobalStyle`
${normalize}
body{
  background-image: url(${milkyWay});
  width:100%;
img{
  max-width:100%;
  height:auto;
}
`

export default GlobalStyle;
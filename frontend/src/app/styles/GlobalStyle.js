import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import milkyWay from '../images/milkyWay_L.jpg';

const GlobalStyle = createGlobalStyle`
${normalize}
*{
  box-sizing: border-box;
}
body{
  background-image: url(${milkyWay});
  max-width: 100%;
  max-height: 100vh;
  font-family: 'MuseoModerno', cursive;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.6vw;
   }
   @media (min-width: 1025px) {
    font-size: 1.4vw;
   }
   @media (min-width: 1366px) {
    font-size: 1.2vw;
   }
img{
  max-width:100%;
  height:auto;
}
i{
  color: ${props => props.theme.colors.white.transparent};
  &:hover{
    color: ${props => props.theme.colors.white.normal};
  }}
p{
  text-align: center;
}
span{
  text-decoration: underline;
}}
`
export default GlobalStyle;
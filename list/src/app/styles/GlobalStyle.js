import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import milkyWay from '../images/milkyWay_L.jpg';

const GlobalStyle = createGlobalStyle`
${normalize}
body{
  background-image: url(${milkyWay});
  width: 100%;
  max-height: 100vh;
  font-family: 'MuseoModerno', cursive;
  @media (min-width: 768px) {
    font-size: 1.5vw;
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
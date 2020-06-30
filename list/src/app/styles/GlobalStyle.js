import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import milkyWay from '../images/milkyWay_L.jpg';

const GlobalStyle = createGlobalStyle`
${normalize}
body{
  background-image: url(${milkyWay});
  width:100%;
  font-family: 'MuseoModerno', cursive;
img{
  max-width:100%;
  height:auto;
}
i{
  color: ${props => props.theme.colors.white.transparent};
  &:hover{
    color: ${props => props.theme.colors.white.normal};
  }
}
`

export default GlobalStyle;
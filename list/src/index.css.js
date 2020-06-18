import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
${normalize}
body{
  background-color:  ${props => props.theme.colors.blue.normal};
}
img{
  max-width:100%;
  height:auto;
}
`
export default GlobalStyle;
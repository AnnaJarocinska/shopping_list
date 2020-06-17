import { createGlobalStyle } from 'styled-components';
import normalize, { Normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
${normalize}
body{
  background-color:  ${props => props.theme.colors.blue.normal};;
}

`
export default GlobalStyle;
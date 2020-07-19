import styled, {css} from 'styled-components';
import Label from './Label';

const Input = styled.input`
flex-basis: 30px;
align-self: ${props => (props.checkbox? "flex-start" : "")};
margin-bottom: 8px;
${({ lang }) => lang && css`
display:none;
&:checked + ${Label} {
    background: ${props => props.theme.colors.blue.basket};
  }`
}
${({ textarea }) => textarea && css`
min-height:60px;
`
}
`
export default Input;

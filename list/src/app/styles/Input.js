import styled, {css} from 'styled-components';
import Label from './Label';

const Input = styled.input`
flex-basis: 30px;
align-self: ${props => (props.checkbox? "flex-start" : "")};

${({ lang }) => lang && css`
display:none;
&:checked + ${Label} {
    background: ${props => props.theme.colors.blue.basket};
  }`
}
`
export default Input;

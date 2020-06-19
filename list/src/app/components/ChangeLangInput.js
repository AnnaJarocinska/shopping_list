import styled from 'styled-components';
import ChangeLangLabel from './ChangeLangLabel';

const ChangeLangInput = styled.input`
display:none;
&:checked + ${ChangeLangLabel} {
    background: ${props => props.theme.colors.blue.basket};
  }
`

export default ChangeLangInput;
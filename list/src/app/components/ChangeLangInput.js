import styled from 'styled-components';
import ChangeLangLabel from './ChangeLangLabel';

const ChangeLangInput = styled.input`
&:checked + ${ChangeLangLabel} {
    background: blue;
  }
`


export default ChangeLangInput;
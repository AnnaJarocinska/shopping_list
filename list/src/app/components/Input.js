import styled from 'styled-components';

const Input = styled.input`

flex-basis: 30px;
align-self: ${props => (props.checkbox? "flex-start" : "")};
`
export default Input;
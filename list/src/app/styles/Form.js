import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
align-self: flex-start;
padding: 20px 30px;
margin: 3vh auto;
max-width: 287px;
box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
background-color: ${props => props.theme.colors.blue.night};
color: ${props => props.theme.colors.white.normal};
@media (min-width: 1025px) {
    width:300px;
   }
`
export default Form;


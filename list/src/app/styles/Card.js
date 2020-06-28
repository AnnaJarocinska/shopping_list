import styled from 'styled-components';

const Card = styled.div`
width:50%;
margin: 0 100px;
box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
background-color: ${props => props.theme.colors.white.normal};
font-family: 'Kalam', cursive;
`
export default Card;
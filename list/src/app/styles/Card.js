import styled from 'styled-components';

const Card = styled.div`
width: 80%;
margin: 0 auto;
box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
background-color: ${props => props.theme.colors.white.normal};
font-family: 'Kalam', cursive;
margin: 3vh auto;
@media (min-width: 480px) {
    width: 50%;
   }
@media (min-width: 590px) {
    width:45%;
   }
`
export default Card;

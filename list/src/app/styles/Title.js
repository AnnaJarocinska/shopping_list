import styled from 'styled-components';

const Title = styled.h1`
text-align: center;
text-transform: uppercase;
font-size: 15vw;
margin: 6vw auto;
color: ${props => props.theme.colors.white.normal};
@media (min-width: 480px) {
    font-size: 6vw;
   }
`
export default Title;
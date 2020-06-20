import styled from 'styled-components';

const Button = styled.button`
font-family: 'MuseoModerno', cursive;
cursor:pointer;
text-transform: uppercase;
font-size:36px;  
border: none;
padding: 10px 44px;
position: relative;
&::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: '';
    width: 50%;
    height: 100%;
    background: ${props => props.theme.colors.blue.basket};
    position: absolute;
    top: 0;
    left: 0;
}
&:hover {
    &::before {
        background: ${props => props.theme.colors.blue.basket};
        width: 100%;
    }
}
`

export default Button;
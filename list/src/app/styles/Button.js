import styled, { css } from 'styled-components';

const Button = styled.button`
cursor:pointer;
text-transform: uppercase;
border: none;
background-color: ${props => props.theme.colors.white.normal};

${({ big }) => big && css`
font-size:9.5vw;  
@media (min-width: 480px) {
    font-size: 3.5vw;
   }
padding: 10px 44px;
margin-top: 15px;
margin-bottom: 15px;
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
}`}

${({ normal }) => normal && css`
text-align: center;
color:black;
box-shadow: 5px 5px 8px;
border-radius:5px;
padding: 7px 20px;
margin-top: 18px;
&:hover{
    background-color: ${props => props.theme.colors.blue.normal};
}
display: ${props => (props.buttonVisability ? "none" : "")};
`}

${({ next }) => next && css`
background-color: ${props => props.theme.colors.green.normal};
width: 80%;
&:hover{
    background-color: ${props => props.theme.colors.yellow.normal};
}`}

${({ link }) => link && css`
background-color: rgb(164,181,198);
padding: 10px 20px;
&:hover{
    background-color: ${props => props.theme.colors.blue.basket};
}`}
`
export default Button;
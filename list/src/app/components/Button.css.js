import styled, {css} from 'styled-components';

const Button = styled.button`
cursor:pointer;
text-transform: uppercase;
border: none;
background-color: ${props => props.theme.colors.white.normal};
${({big}) => big && css`
font-size:36px;  
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
}`}

${({normal}) => normal && css`
text-align: center;
color:black;
box-shadow: 5px 5px 8px;
border-radius:5px;
padding: 7px 20px;
margin-top: 18px;
&:hover{
    background-color: ${props => props.theme.colors.blue.light};
}
display: ${props => (props.buttonVisability? "none" : "")};`
}`

export default Button;
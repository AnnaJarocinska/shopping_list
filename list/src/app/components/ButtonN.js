import styled from 'styled-components';

const Button = styled.form`

color:black;
background-color: #fff;

box-shadow: 5px 5px 8px;

padding: 7px 20px;
text-transform: uppercase;
margin-top: 18px;
text-align: center;
background-color: #fff;
border-radius:5px;

&:hover{
    background-color: rgb(173,255,47)
}
display: ${props => (props.buttonVisability? "none" : "")};
`
export default Button;
import styled, {css} from 'styled-components';

const Label = styled.label`
width:100%;
margin: ${props => (props.form? "8px" : "")};

${({ lang }) => lang && css`
display: block;
padding: 1rem;
background-color: ${props => props.theme.colors.white.normal};`}
`
export default Label;
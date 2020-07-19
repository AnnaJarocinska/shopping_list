import styled from 'styled-components';

const Blur = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.theme.colors.black.blur};
position: fixed;
top: 0;
left: 0;
z-index:10;
`
export default Blur;

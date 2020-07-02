import styled from 'styled-components';

const Notification = styled.div`
background-color:${props => props.theme.colors.white.normal};
width: 400px;
height:150px;
position: absolute;
z-index:20;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding:10px;
box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`
export default Notification;
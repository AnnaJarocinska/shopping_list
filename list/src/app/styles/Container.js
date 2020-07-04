import styled, {css} from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: ${props => (props.column? "column" : "")};
align-items: ${props => (props.center? "center" : "")};
justify-content: ${props => (props.end? "flex-end" : "")};

${({ start }) => start && css`
flex-direction: column;
align-items: center;
justify-content: space-around;
`}

${({ img }) => img && css`
display: inline-block;
flex-basis:40%;
@media (min-width: 480px) {
    flex-basis:20%;
  }
`}

${({ text }) => text && css`
display: block;
padding: 10px 55px;
`}

${({ animation }) => animation && css`
justify-content: space-between;
width:70vw;
margin:2vw auto 2vw auto;
flex-wrap: wrap;
@media (min-width: 480px) {
    flex-wrap: nowrap;
   }
`}

${({ lang }) => lang && css`
text-transform: uppercase;
background-color: ${props => props.theme.colors.white.normal};
`}
`
export default Container;


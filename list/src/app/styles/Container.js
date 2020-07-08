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
min-height: 80vh;
`}

${({ list }) => list && css`
flex-direction: column;
@media (min-width: 590px) {
  flex-direction: row;
}
`}

${({ forms }) => forms && css`
flex-direction: column;

margin: 0 auto;
order:-1;
@media (min-width: 590px) {
  order: 0;
}
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
padding: 8px 35px;
@media (min-width: 1025px){
  padding: 10px 55px;
}
`}

${({ animation }) => animation && css`
justify-content: space-between;
width:80vw;
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


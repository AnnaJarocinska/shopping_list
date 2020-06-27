import styled from 'styled-components';

const FlexContainer = styled.div`
display: flex;
flex-direction: ${props => (props.column? "column" : "")};
align-items: ${props => (props.center? "center" : "")};
justify-content: ${props => (props.f_end? "flex-end" : "")};
`

export default FlexContainer;


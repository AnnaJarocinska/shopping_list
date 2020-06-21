import styled from 'styled-components';

const FlexDiv = styled.div`
display: flex;
justify-content: ${props => (props.f_end? "flex-end" : "")};


`
export default FlexDiv;
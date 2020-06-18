import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
background-color: ${props => props.theme.colors.blue.normal};
padding: ${({theme}) => theme.spacing.m}px;
`

const Navigation = () => {
    return (  
      <Container>
        {/* <nav> */}
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/making_list">Make list</Link>
                </li>
                <li>
                  <Link to="/adding_recipent">Add recipent</Link>
                </li>
                <li>
                  <Link to="/sending_list">Send list</Link>
                </li>
              </ul>
            {/* </nav> */}
            </Container>
    );
}
 
export default Navigation;
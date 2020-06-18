import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StartAnimation from '../components/StartAnimation';
import Button from '../components/Button.css';
import FlexContainer from '../components/FlexContainer';

const Start = () => {
    return (
        <FlexContainer>
            <StartAnimation/>
            <Link to="/making_list">
                <Button>
                Start
                </Button>
                </Link>
        </FlexContainer>
    );
}

export default Start;
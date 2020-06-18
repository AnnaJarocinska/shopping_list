import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StartAnimation from '../components/StartAnimation';

const Start = () => {
    return (
        <Fragment>
            <StartAnimation/>
            <Link to="/making_list">Start</Link>
        </Fragment>
    );
}

export default Start;
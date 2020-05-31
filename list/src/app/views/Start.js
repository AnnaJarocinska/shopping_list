import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <Fragment>
            <p>Start</p>
            <Link to="/making_list">Make list</Link>
        </Fragment>
    );
}

export default Start;
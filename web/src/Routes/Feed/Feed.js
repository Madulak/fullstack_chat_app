import React, { useEffect } from 'react';
import classes from './Feed.module.css';

import { useSelector } from 'react-redux';

const Feed = ({history}) => {

    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
        if (!isAuth) {
            history.push('/')
        }
    },[isAuth])

    return (
        <div className={classes.Feed__Container}>
            <h1>Feed</h1>
        </div>
    );
}

export default Feed;
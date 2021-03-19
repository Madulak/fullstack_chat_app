import classes from './StartupScreen.module.css';
import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';


const StartupScreen = (props) => {

    const isAuth = useSelector(state => state.auth.isAuth);
    console.log(props)

    useEffect(() => {
        if(!isAuth) {
            props.history.push('/signup')
        } 
    },[isAuth])

    return (
        <div className={classes.StartupScreen__Container}>
            <h1>Loading!!</h1>
        </div>
    );
}

export default StartupScreen;
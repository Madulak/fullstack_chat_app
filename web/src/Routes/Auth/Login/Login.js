import React, { useState, useEffect } from 'react';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../redux/actions/authActions';

const Login = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
        if (isAuth) {
            history.push('/feed')
        }
    },[isAuth])

    const loginHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        dispatch(authActions.login(data));
        setEmail('');
        setPassword('');
    }

    return (
        <div className={classes.Login__Container}>
            <div className={classes.Login__FormContainer}>
                <h3>Login</h3>
                {/* <input className={classes.Signup__Input} placeholder='UsernaLogin */}
                <input className={classes.Login__Input} 
                    type='email' placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className={classes.Login__Input} 
                    type='password' placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={loginHandler}>Submit</button>
            </div>
            <div className={classes.Login__GoTo__Signup}>
                <Link to='/signup'><p>I Don't have Account I want to Signup</p></Link>
            </div>
        </div>
    );
}

export default Login;
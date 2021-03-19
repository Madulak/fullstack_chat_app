import React, { useState } from 'react';
import classes from './Signup.module.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as authActions from '../../../redux/actions/authActions';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const signupHandler = (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password,
        }
        dispatch(authActions.signup(data));
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className={classes.Signup__Container}>
            <div className={classes.Signup__FormContainer}>
                <h3>Signup</h3>
                <input className={classes.Signup__Input} 
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
                <input className={classes.Signup__Input} 
                    type='email' placeholder='Email' 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <input className={classes.Signup__Input} 
                    type='password' placeholder='Password' 
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <button onClick={signupHandler}>Submit</button>
            </div>
            <div className={classes.Login__GoTo__Signup}>
                <Link to='/login'><p>I have Account I want to Login</p></Link>
            </div>
        </div>
    );
}

export default Signup;
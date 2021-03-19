import axios from "axios";

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const ERROR = 'ERROR';

const baseUrl = 'http://192.168.43.117:8080'

export const signup = (data) => {

    return async dispatch => {
        let response;
        try {
            response = await axios.post(`${baseUrl}/signup`, data);
            console.log('[RESPONSE] ', response.data);
        } catch (error) {
            console.log('[ERROR] ', error);
            dispatch({type: ERROR, error: error})
        }
        dispatch({type: SIGNUP})
    }
}

export const login = (data) => {

    return async dispatch => {
        let response;
        try {
            response = await axios.post(`${baseUrl}/login`, data);
            console.log('[RESPONSE] ', response.data);
        } catch (error) {
            console.log('[ERROR] ', error);
            dispatch({type: ERROR, error: error})
            throw error;
        }
        dispatch({type: LOGIN, isAuth: true, authData: response.data})
    }
}
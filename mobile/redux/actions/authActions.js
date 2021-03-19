import axios from "axios";
import { baseUrl } from '../../util';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const ERROR = 'ERROR';



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
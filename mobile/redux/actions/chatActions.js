
import axios from 'axios';

import { baseUrl } from '../../util';

export const GET_USERS = 'GET_USERS';
export const GET_SINGLE_USER = 'GET_SINGLE_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export const get_users = () => {

    return async (dispatch, getState) => {
        const currentUser = getState().auth.userId;
        let response;
        try {
            response = await axios.get(`${baseUrl}/users`);
            // console.log('[RESPONSE USERS] ', response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
        dispatch({type: GET_USERS, users: response.data.data, currentUser:currentUser})
    }
}

export const get_single_user = (id) => {

    return async (dispatch) => {
        let response;
        try {
            response = await axios.get(`${baseUrl}/user/${id}`);
            console.log('[RESPONSE SINGLE USER] ', response.data.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
        dispatch({type: GET_SINGLE_USER, singleUser: response.data.data})
    }
}

export const send_message = (data) => {

    return async (dispatch, getState) => {
        const token = getState().auth.token;
        let response;
        try {
            const config = {
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            }
            response = await axios.post(`${baseUrl}/message/${data.receiverId}`,{message: data.message}, config);
            // console.log('[SEND MESSAGE RESPONSE] ', response.data);
        } catch (error) {
            console.log('[ERROR MSG] ', error);
            throw error;
        }
        dispatch({type: SEND_MESSAGE})
    }
}
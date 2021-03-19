import { LOGIN } from "../actions/authActions";


const initialState = {
    isAuth: false,
    username: null,
    userId: null,
    token: null,
    error: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            return {
                isAuth: true,
                username: action.authData.username,
                userId: action.authData.userId,
                token: action.authData.token
            }

        default:
            return state
    }
}

export default authReducer;
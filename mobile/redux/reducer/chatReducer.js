import { GET_SINGLE_USER, GET_USERS } from '../actions/chatActions';

const initialState = {
    users: [],
    singleUser: null,
}

const chatReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USERS:
            const user = action.users.filter(el => el._id !== action.currentUser)
            return {
                ...state,
                users: user,
            }

        case GET_SINGLE_USER:
            return {
                ...state,
                singleUser: action.singleUser,
            }
        
        default:
            return state
    }
}

export default chatReducer;
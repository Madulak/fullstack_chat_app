
const initialState = {
    isAuth: false,
    username: null,
    userId: null,
    token: null,
    error: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }
}

export default authReducer;
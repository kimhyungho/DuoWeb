export const initialState = {
    isLoggedIn: false,
    userId: null,
    userNickname: null,
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                userId: action.data.userId,
                userNickname: action.data.userNickname,
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                userId: null,
                userNickname: null,
            };
        default:
            return state;
    }
};

export default reducer;
export const initialState = {
    isLoggedIn: false,
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
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default reducer;
export const initialState = {
    isLoggedIn: false,
    userId: null,
    nickname: null,
    userToken: null,
    accessToken: null,
    platform: null,
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
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
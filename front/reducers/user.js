export const initialState = {
    userId: null,
    nickname: null,
    userToken: null,
    accessToken: null,
    platform: null,
}


export const socailLoginRequest = (accessToken, platform) => {
    return {    
        type : 'SOCIAL_LOG_IN_REQUEST',
        accessToken,
        platform,
    }
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
        case 'SOCIAL_LOG_IN_REQUEST':
            return {
                ...state,
                accessToken: action.accessToken,
                platform: action.platform,
            }
            case 'LOG_IN_SUCCESS':
            return {
                ...state,
                userId: action.data.userId,
                nickname: action.data.userNickname,
                userToken: action.data.userToken,
            };
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                userId: null,
                nickname: null,
                userToken: null,
                accessToken: null,
                platform: null,
            };
        default:
            return state;
    }
};

export default reducer;
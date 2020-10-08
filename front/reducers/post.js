export const initialState = {
    postId: null,
    userId: null,
    gameMode: null,
    title: null,
    startTier: null,
    endTier: null,
    startTime: null,
    headCount: null,
    top: null,
    bottom: null,
    mid: null,
    jungle: null,
    support: null,
    content: null,
    talkon: null,
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

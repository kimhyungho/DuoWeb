import produce from '../util/produce';

export const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logInError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    signOutLoading: false,
    signOutDone: false,
    signOutError: null,
    me: {
        userId: null,
        nickname: null,
        userToken: null,
        accessToken: null,
        platform: null,
    }
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';


export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    data,
});

export const logoutRequestAction = () => ({
    type: LOG_OUT_REQUEST,
});

export const signUpRequestAction = (data) => ({
    type: SIGN_UP_REQUEST,
    data,
});

export const signOutRequestAction = (data) => ({
    type: SIGN_OUT_REQUEST,
    data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInError = null;
            draft.logInDone = false;
            draft.me.accessToken = action.data.accessToken;
            draft.me.platform = action.data.platform;
            break;
        case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.logInError = null;
            draft.logInDone = true;
            draft.me.userId = action.data.userId;
            draft.me.nickname = action.data.nickname;
            draft.me.userToken = action.data.userToken;
            break;
        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;
        case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutError = null;
            draft.logOutDone = false;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me.userId = null;
            draft.me.nickname = null;
            draft.me.userToken = null;
            draft.me.accessToken = null;
            draft.me.platform = null;
            break;
        case SIGN_UP_REQUEST:
            draft.me.userId = action.data.userId;
            draft.me.nickname = action.data.nickname;
            draft.me.userToken = action.data.userToken;
            draft.signUpLoading = true;
            draft.signUpError = null;
            draft.signUpDone = false;
            break;
        case SIGN_UP_SUCCESS:
            draft.logInError = null;
            draft.signUpLoading = false;
            draft.signUpDone = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;
        case SIGN_OUT_REQUEST:
            draft.signOutLoading = true;
            draft.signOutError = null;
            draft.signOutDone = false;
            break;
        case SIGN_OUT_SUCCESS:
            draft.signOutLoading = false;
            draft.signOutDone = true;
            break;
        case SIGN_OUT_FAILURE:
            draft.signOutLoading = false;
            draft.signOutError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;
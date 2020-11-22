import produce from '../util/produce';

export const initialState = {
    posts: [],
    myLolPosts: [],
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    addLolPostLoading: false,
    addLolPostDone: false,
    addLolPostError: null,
    deleteLolPostLoading: false,
    deleteLolPostDone: false,
    deleteLolPostError: null,
    updateLolPostLoading: false,
    updateLolPostDone: false,
    updateLolPostError: null,

    detailLolPostOn: false,
    detailLolPost: null,
};

export const LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
export const LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
export const LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';

export const ADD_LOL_POST_REQUEST = 'ADD_LOL_POST_REQUEST';
export const ADD_LOL_POST_SUCCESS = 'ADD_LOL_POST_SUCCESS';
export const ADD_LOL_POST_FAILURE = 'ADD_LOL_POST_FAILURE';

export const DELETE_LOL_POST_REQUEST = 'DELETE_LOL_POST_REQUEST';
export const DELETE_LOL_POST_SUCCESS = 'DELETE_LOL_POST_SUCCESS';
export const DELETE_LOL_POST_FAILURE = 'DELETE_LOL_POST_FAILURE';

export const UPDATE_LOL_POST_REQUEST = 'UPDATE_LOL_POST_REQUEST';
export const UPDATE_LOL_POST_SUCCESS = 'UPDATE_LOL_POST_SUCCESS';
export const UPDATE_LOL_POST_FAILURE = 'UPDATE_LOL_POST_FAILURE';

export const DETAIL_LOL_POST_ON = 'DETAIL_LOL_POST_ON';
export const DETAIL_LOL_POST_OFF = 'DETAIL_LOL_POST_OFF';

export const loadAllLolPostsRequestAction = (data) => ({
    type: LOAD_ALL_LOL_POSTS_REQUEST,
    data,
});

export const addLolPostRequestAction = (data) => ({
    type: ADD_LOL_POST_REQUEST,
    data,
});


export const deleteLolPostRequestAction = (data) => ({
    type: DELETE_LOL_POST_REQUEST,
    data,
});

export const updateLolPostRequestAction = (data) => ({
    type: UPDATE_LOL_POST_REQUEST,
    data,
});




export const detailLolPostOnAction = (data) => ({
    type: DETAIL_LOL_POST_ON,
    data,
});

export const detailLolPostOffAction = () => ({
    type: DETAIL_LOL_POST_OFF,
});



const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_ALL_LOL_POSTS_REQUEST:
            draft.loadPostLoading = true;
            draft.loadPostDone = false;
            draft.loadPostError = null;
            break;
        case LOAD_ALL_LOL_POSTS_SUCCESS:
            draft.loadPostLoading = false;
            draft.loadPostDone = true;
            draft.posts = action.data;
            break;
        case LOAD_ALL_LOL_POSTS_FAILURE:
            draft.loadPostLoading = false;
            draft.loadPostError = action.error;
            break;
        case ADD_LOL_POST_REQUEST:
            draft.addLolPostLoading = true;
            draft.addLolPostDone = false;
            draft.addLolPostError = null;
            break;
        case ADD_LOL_POST_SUCCESS:
            draft.addLolPostLoading = false;
            draft.addLolPostDone = true;
            break;
        case ADD_LOL_POST_FAILURE:
            draft.addLolPostLoading = false;
            draft.addLolPostError = action.error;
            break;
        case DELETE_LOL_POST_REQUEST:
            draft.deleteLolPostLoading = true;
            draft.deleteLolPostDone = false;
            draft.deleteLolPostError = null;
            break;
        case DELETE_LOL_POST_SUCCESS:
            draft.deleteLolPostLoading = false;
            draft.deleteLolPostDone = true;
            break;
        case DELETE_LOL_POST_FAILURE:
            draft.deleteLolPostLoading = false;
            draft.deleteLolPostError = action.error;
            break;
        case UPDATE_LOL_POST_REQUEST:
            draft.updateLolPostLoading = true;
            draft.updateLolPostDone = false;
            draft.updateLolPostError = null;
            break;
        case UPDATE_LOL_POST_SUCCESS:
            draft.updateLolPostLoading = false;
            draft.updateLolPostDone = true;
            draft.detailLolPost.top = action.data2.top;
            draft.detailLolPost.jungle = action.data2.jungle;
            draft.detailLolPost.mid = action.data2.mid;
            draft.detailLolPost.bottom = action.data2.bottom;
            draft.detailLolPost.support = action.data2.support;
            draft.detailLolPost.endTime = action.data2.endTime;
            draft.detailLolPost.headCount = action.data2.headCount;
            draft.detailLolPost.gameMode = action.data2.gameMode;
            draft.detailLolPost.title = action.data2.title;
            draft.detailLolPost.content = action.data2.content;
            draft.detailLolPost.talkOn = action.data2.talkOn;
            break;
        case UPDATE_LOL_POST_FAILURE:
            draft.updateLolPostLoading = false;
            draft.updateLolPostError = action.error;
            break;
        case DETAIL_LOL_POST_ON:
            draft.detailLolPostOn = true;
            draft.detailLolPost = action.data;
            break;
        case DETAIL_LOL_POST_OFF:
            draft.detailLolPostOn = false;
            draft.detailLolPost = null;
            break;

        default:
            break;
    }
});

export default reducer;

import produce from '../util/produce';

export const initialState = {
    posts: [],
    myLolPosts: [],
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    addLolPostLoading: false,
    addLolPostDone: false,
    addLolPostError: false,
};

export const LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
export const LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
export const LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';

export const ADD_LOL_POST_REQUEST = 'ADD_LOL_POST_REQUEST';
export const ADD_LOL_POST_SUCCESS = 'ADD_LOL_POST_SUCCESS';
export const ADD_LOL_POST_FAILURE = 'ADD_LOL_POST_FAILURE';

export const loadAllLolPostsRequestAction = (data) => ({
    type: LOAD_ALL_LOL_POSTS_REQUEST,
    data,
});

export const addLolPostRequestAction = (data) => ({
    type: ADD_LOL_POST_REQUEST,
    data,
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
            draft.loadPostError = null;
            break;
        case ADD_LOL_POST_SUCCESS:
            draft.addLolPostLoading = false;
            draft.addLolPostDone = true;
            break;
        case ADD_LOL_POST_FAILURE:
            draft.addLolPostLoading = false;
            draft.addLolPostError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;

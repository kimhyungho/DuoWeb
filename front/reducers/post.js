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



    detailLolPostOn: false,
    detailLolPost: null,
};

export const LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
export const LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
export const LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';

export const ADD_LOL_POST_REQUEST = 'ADD_LOL_POST_REQUEST';
export const ADD_LOL_POST_SUCCESS = 'ADD_LOL_POST_SUCCESS';
export const ADD_LOL_POST_FAILURE = 'ADD_LOL_POST_FAILURE';

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

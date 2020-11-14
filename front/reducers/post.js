import produce from '../util/produce';

export const initialState = {
    posts:[],
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
};

export const LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
export const LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
export const LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';


export const loadAllLolPostsRequestAction = (data) => ({
    type: LOAD_ALL_LOL_POSTS_REQUEST,
    data,   // userToken
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
            draft.posts = draft.posts.concat(action.data);
            break;
        case LOAD_ALL_LOL_POSTS_FAILURE:
            draft.loadPostLoading = false;
            draft.loadPostError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;

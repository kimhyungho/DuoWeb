import produce from '../util/produce';

export const initialState = {
    comments: [],
    loadCommentsLoading: false,
    loadCommentsDone: false,
    loadCommentsError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    removeCommentLoading: false,
    removeCommentDone: false,
    removeCommentError: null,
};

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const EMPTY_COMMENTS_REQUEST = 'EMPTY_COMMENTS_REQUEST';

export const loadCommentsRequestAction = (data) => ({
    type: LOAD_COMMENTS_REQUEST,
    data,
});


export const addCommentRequestAction = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

export const removeCommentRequestAction = (data) => ({
    type: REMOVE_COMMENT_REQUEST,
    data,
});

export const emptyCommentsRequestAction = () => ({
    type: EMPTY_COMMENTS_REQUEST
});


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_COMMENTS_REQUEST:
            draft.loadCommentsLoading = true;
            draft.loadCommentsDone = false;
            draft.loadCommentsError = null;
            break;
        case LOAD_COMMENTS_SUCCESS:
            draft.loadCommentsLoading = false;
            draft.loadCommentsDone = true;
            draft.comments = action.data;
            break;
        case LOAD_COMMENTS_FAILURE:
            draft.loadCommentsLoading = false;
            draft.loadCommentsError = action.error;
            break;
        case ADD_COMMENT_REQUEST:
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.loadCommentsError = null;
            break;
        case ADD_COMMENT_SUCCESS:
            draft.addCommentLoading = false;
            draft.addCommentDone = true;
            break;
        case ADD_COMMENT_FAILURE:
            draft.addCommentLoading = false;
            draft.addCommentError = action.error;
            break;
        case REMOVE_COMMENT_REQUEST:
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.loadCommentsError = null;
            break;
        case REMOVE_COMMENT_SUCCESS:
            draft.removeCommentLoading = false;
            draft.removeCommentDone = true;
            break;
        case REMOVE_COMMENT_FAILURE:
            draft.removeCommentLoading = false;
            draft.removeCommentError = action.error;
            break;
        case EMPTY_COMMENTS_REQUEST:
            draft.comments = [];
            break;
        default:
            break;
    }
});

export default reducer;

import produce from '../util/produce';

export const initialState = {
    comments: [],
    loadCommentsLoading: false,
    loadCommentsDone: false,
    loadCommentsError: null,
};

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const EMPTY_COMMENTS_REQUEST = 'EMPTY_COMMENTS_REQUEST';

export const loadCommentsRequestAction = (data) => ({
    type: LOAD_COMMENTS_REQUEST,
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
        case EMPTY_COMMENTS_REQUEST:
            draft.comments = [];
            break;
        default:
            break;
    }
});

export default reducer;

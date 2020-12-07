import axios from "axios";
import { all, put, takeLatest, fork, call } from "redux-saga/effects";

import {
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    REMOVE_COMMENT_REQUEST,
    REMOVE_COMMENT_SUCCESS,
    REMOVE_COMMENT_FAILURE,
} from '../reducers/comment';

function loadCommentsAPI(data) {
    return axios.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol?postId=${data.postId}`,
        {}, { headers: { Authorization: data.userToken } });
}

function* loadComments(action) {
    try {
        const result = yield call(loadCommentsAPI, action.data);
        console.log(result);
        yield put({
            type: LOAD_COMMENTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: LOAD_COMMENTS_FAILURE,
            error: err.response.data,
        });
    }
}

function addCommentAPI(data) {
    return axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol`,
        { content: data.content, userId: data.userId, postId: data.postId, nickname: data.nickname }, { headers: { Authorization: data.userToken } });
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        console.log(result);
        yield put({
            type: ADD_COMMENT_SUCCESS,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}

function removeCommentAPI(data2) {
    return axios.delete(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol`,
    {headers: {Authorization: data2.userToken}, data: { commentId: data2.commentId, userId: data2.userId}}
    )};

function* removeComment(action) {
    try {
        const result = yield call(removeCommentAPI, action.data);
        console.log(result);
        yield put({
            type: REMOVE_COMMENT_SUCCESS,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: REMOVE_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadComments() {
    yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchRemoveComent() {
    yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

export default function* commentSaga() {
    yield all([
        fork(watchLoadComments),
        fork(watchAddComment),
        fork(watchRemoveComent),
    ]);
}
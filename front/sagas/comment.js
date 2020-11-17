import axios from "axios";
import { all, put, takeLatest, fork, call } from "redux-saga/effects";

import {
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_FAILURE,
} from '../reducers/comment';

function loadCommentsAPI(data) {
    return axios.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol?{query}`,
        { postId: data.postId }, { headers: { Authorization: data.userToken } });
}

function* loadComments(action) {
    try {
        const result = yield call(loadCommentsAPI, action.data);
        console.log(action.data);
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

function* watchLoadComments() {
    yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

export default function* commentSaga() {
    yield all([
        fork(watchLoadComments),
    ]);
}
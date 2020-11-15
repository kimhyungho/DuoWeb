import axios from "axios";
import { all, put, takeLatest, fork, call } from "redux-saga/effects";

import {
    LOAD_ALL_LOL_POSTS_REQUEST,
    LOAD_ALL_LOL_POSTS_SUCCESS,
    LOAD_ALL_LOL_POSTS_FAILURE,
} from '../reducers/post';

function loadAllLolPostsAPI(data) {
    return axios.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`,
    {}, {headers: {Authorization: data.userToken}});
}

function* loadAllLolPosts(action) {
    try {
        const result = yield call(loadAllLolPostsAPI, action.data);
        console.log(result);
        yield put({
            type: LOAD_ALL_LOL_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: LOAD_ALL_LOL_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadAllLolPosts() {
    yield takeLatest(LOAD_ALL_LOL_POSTS_REQUEST, loadAllLolPosts);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadAllLolPosts),
    ]);
}
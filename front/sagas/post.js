import axios from "axios";
import { all, put, takeLatest, fork, select } from "redux-saga/effects";
import * as selectors from './selectors';

import {
    LOAD_ALL_LOL_POSTS_REQUEST,
    LOAD_ALL_LOL_POSTS_SUCCESS,
    LOAD_ALL_LOL_POSTS_FAILURE,
} from '../reducers/post';

function loadAllLolPostsAPI(data) {
    const userToken = yield select(selectors.userToken)
    console.log(userToken)
    return axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`,
    {}, {headers: {Authorization: data.userToken}});
}

function* loadAllLolPosts(action) {
    try {
        const result = yield call(loadAllLolPostsAPI, action.data);
        console.log(result)
        yield put({
            type: LOAD_ALL_LOL_POSTS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_ALL_LOL_POSTS_FAILURE,
            data: err.response.data,
        })
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
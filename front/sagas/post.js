import axios from "axios";
import { all, put, takeLatest, fork, call } from "redux-saga/effects";

import {
    LOAD_ALL_LOL_POSTS_REQUEST,
    LOAD_ALL_LOL_POSTS_SUCCESS,
    LOAD_ALL_LOL_POSTS_FAILURE,
    ADD_LOL_POST_REQUEST,
    ADD_LOL_POST_SUCCESS,
    ADD_LOL_POST_FAILURE
} from '../reducers/post';

function loadAllLolPostsAPI(data) {
    return axios.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`,
        {}, { headers: { Authorization: data.userToken } });
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


function addLolPostAPI(data) {
    return axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`,
        {   userNickname: data.userNickname, userId: data.userId,
            gameMode: data.gameMode, title: data.gameMode, 
            startTier: data.startTier, endTier: data.endTier,
            endTime: data.endTime, headCount: data.headCount,
            top: data.top, bottom: data.bottom,
            mid: data.mid, jungle: data.jungle, 
            support: data.support, content: data.contnet, 
            talkon: data.talkon,
        }, { headers: { Authorization: data.userToken } });
}

function* addLolPost(action) {
    try {
        const result = yield call(addLolPostAPI, action.data);
        console.log(result);
        yield put({
            type: ADD_LOL_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: ADD_LOL_POST_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchLoadAllLolPosts() {
    yield takeLatest(LOAD_ALL_LOL_POSTS_REQUEST, loadAllLolPosts);
}

function* watchAddLolPost() {
    yield takeLatest(ADD_LOL_POST_REQUEST, addLolPost);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadAllLolPosts),
        fork(watchAddLolPost),
    ]);
}
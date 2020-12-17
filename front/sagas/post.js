import axios from "axios";
import { all, put, takeLatest, fork, call } from "redux-saga/effects";

import {
    LOAD_ALL_LOL_POSTS_REQUEST,
    LOAD_ALL_LOL_POSTS_SUCCESS,
    LOAD_ALL_LOL_POSTS_FAILURE,
    ADD_LOL_POST_REQUEST,
    ADD_LOL_POST_SUCCESS,
    ADD_LOL_POST_FAILURE,
    DELETE_LOL_POST_REQUEST,
    DELETE_LOL_POST_SUCCESS,
    DELETE_LOL_POST_FAILURE,
    UPDATE_LOL_POST_REQUEST,
    UPDATE_LOL_POST_SUCCESS,
    UPDATE_LOL_POST_FAILURE,
    FILTER_LOL_POST_REQUEST,
    FILTER_LOL_POST_SUCCESS,
    FILTER_LOL_POST_FAILURE,
    LOAD_ALL_MY_LOL_POSTS_REQUEST,
    LOAD_ALL_MY_LOL_POSTS_SUCCESS,
    LOAD_ALL_MY_LOL_POSTS_FAILURE,
} from '../reducers/post';

function loadAllLolPostsAPI(data) {
    return axios.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol?limit=${data.limit}&offset=${data.offset}`,
        {}, { headers: { Authorization: data.userToken } });
}

function* loadAllLolPosts(action) {
    try {
        const result = yield call(loadAllLolPostsAPI, action.data);
        console.log(action.data);
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
        {
            userNickname: data.userNickname, userId: data.userId,
            gameMode: data.gameMode, title: data.title,
            startTier: data.startTier, endTier: data.endTier,
            endTime: data.endTime, headCount: data.headCount,
            top: data.top, bottom: data.bottom,
            mid: data.mid, jungle: data.jungle,
            support: data.support, content: data.content,
            talkon: data.talkOn,
        }, { headers: { Authorization: data.userToken } });
};

function* addLolPost(action) {
    try {
        const result = yield call(addLolPostAPI, action.data);
        console.log(result)

        yield put({
            type: ADD_LOL_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err.response);
        yield put({
            type: ADD_LOL_POST_FAILURE,
            error: err.response,
        });
    }
}



function deleteLolPostAPI(data2) {
    return axios.delete(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`,
    {headers: { Authorization: data2.userToken}, data : {postId: data2.postId, userId: data2.userId}}
)};

function* deleteLolPost(action) {
    try {
        const result = yield call(deleteLolPostAPI, action.data);
        console.log(result)

        yield put({
            type: DELETE_LOL_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err.response);
        yield put({
            type: DELETE_LOL_POST_FAILURE,
            error: err.response,
        });
    }
}


function updateLolPostAPI(data) {
    return axios.put(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`,
        {
            postId: data.postId, userId: data.userId,
            gameMode: data.gameMode, title: data.title,
            startTier: data.startTier, endTier: data.endTier,
            endTime: data.endTime, headCount: data.headCount,
            top: data.top, bottom: data.bottom,
            mid: data.mid, jungle: data.jungle,
            support: data.support, content: data.content,
            talkon: data.talkOn,
        }, { headers: { Authorization: data.userToken } });
};

function* updateLolPost(action) {
    try {
        const result = yield call(updateLolPostAPI, action.data);
        console.log(result)

        yield put({
            type: UPDATE_LOL_POST_SUCCESS,
            data: result.data,
            data2: action.data,
        });
    } catch (err) {
        console.log(err.response);
        yield put({
            type: UPDATE_LOL_POST_FAILURE,
            error: err.response,
        });
    }
}


function filterLolPostAPI(data) {
    return axios.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol/filter?gameMode=${data.gameMode}&headCount=${data.headCount}&wantTier=${data.wantTier}&top=${data.top}&bottom=${data.bottom}&mid=${data.mid}&jungle=${data.jungle}&support=${data.support}&talkon=${data.talkOn}&limit=${data.limit}&offset=${data.offset}`,
        {}, { headers: { Authorization: data.userToken } });
};

function* filterLolPost(action) {
    try {
        const result = yield call(filterLolPostAPI, action.data);
        console.log(result)

        yield put({
            type: FILTER_LOL_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err.response);
        yield put({
            type: FILTER_LOL_POST_FAILURE,
            error: err.response,
        });
    }
}


function loadMyLolPostAPI(data) {
    return axios.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/me?userId=${data.userId}`,
        {}, { headers: { Authorization: data.userToken } });
};

function* loadAllMyLolPosts(action) {
    try {
        const result = yield call(loadMyLolPostAPI, action.data);
        console.log(result)
        yield put({
            type: LOAD_ALL_MY_LOL_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err.response);
        yield put({
            type: LOAD_ALL_MY_LOL_POSTS_FAILURE,
            error: err.response,
        });
    }
}


function* watchLoadAllLolPosts() {
    yield takeLatest(LOAD_ALL_LOL_POSTS_REQUEST, loadAllLolPosts);
}

function* watchLoadMyLolPosts() {
    yield takeLatest(LOAD_ALL_MY_LOL_POSTS_REQUEST, loadAllMyLolPosts);
}

function* watchAddLolPost() {
    yield takeLatest(ADD_LOL_POST_REQUEST, addLolPost);
}

function* watchDeleteLolPost() {
    yield takeLatest(DELETE_LOL_POST_REQUEST, deleteLolPost);
}

function* watchUpdateLolPost() {
    yield takeLatest(UPDATE_LOL_POST_REQUEST, updateLolPost);
}

function* watchFilterLolPost() {
    yield takeLatest(FILTER_LOL_POST_REQUEST, filterLolPost);
}


export default function* postSaga() {
    yield all([
        fork(watchLoadAllLolPosts),
        fork(watchAddLolPost),
        fork(watchDeleteLolPost),
        fork(watchUpdateLolPost),
        fork(watchFilterLolPost),
        fork(watchLoadMyLolPosts),
    ]);
}
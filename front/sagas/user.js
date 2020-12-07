import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios';

import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    CHANGE_NICKNAME_REQUEST,
    CHANGE_NICKNAME_SUCCESS,
    CHANGE_NICKNAME_FAILURE,
} from '../reducers/user';

function loginAPI(data) {
    return axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth/${data.platform}`,
        {}, { headers: { Authorization: data.accessToken } });
}

function* logIn(action) {
    try {
        const result = yield call(loginAPI, action.data);
        console.log(result);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data.code,
        });
    }
}

function* logOut() {
    try {
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    return axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth/${data.platform}`,
        { nickname: data.nickname }, { headers: { Authorization: data.accessToken } });
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err.response.data.code);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}


function signOutAPI(data2) {
    return axios.delete('http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth',
        {
            headers: { Authorization: data2.userToken }, data: {
                userId: data2.userId
            }
        });

}
function* signOut(action) {
    try {
        console.log(action.data)
        const result = yield call(signOutAPI, action.data);
        yield put({
            type: SIGN_OUT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: SIGN_OUT_FAILURE,
            error: err.response,
        });
    }
}


function changeNicknameAPI(data) {
    return axios.put('http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth', { userId: data.userId, nickname: data.nickname }, { headers: { Authorization: data.userToken } });
}

function* changeNickname(action) {
    try {
        const result = yield call(changeNicknameAPI, action.data);
        console.log(result);
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response,
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchSignOut() {
    yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

function* wathchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchSignOut), // check error,
        fork(wathchChangeNickname),
    ]);
}
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
            data: result.data
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

function* signUp() {
    try {
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err.response.data);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
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

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}
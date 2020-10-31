import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function logInAPI() {
    return axios.post('/api/login')
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logIn(action) {
    try {
        //const result = yield call(logInAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data,
        });

    } catch(err) {

    }
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });

    } catch(err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}


function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logIn);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ]);
}
import { all, call, fork, put, takeLatest, select } from "redux-saga/effects";
import axios from 'axios';
import * as selectors from './selectors'

function socialLoginAPI() {

    // return axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/${platform}`,
    // {}, {headers: {Authorization: accessToken}});

}


function* logIn(action) {
    try {

        const accessToken = yield select(selectors.accessToken);
        const platform = yield select(selectors.platform);

        const result = axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth/${platform}`,
            {}, { headers: { Authorization: accessToken } });

        

        console.log("lkkk", result);


        // yield put({
        //     type: 'LOG_IN_SUCCESS',
        //     userToken: userToken,
        //     userId: userId,
        //     nickname: nickname,
        // });

    } catch (err) {

        console.log("안된다.");
        // yield put({
        //     type: 'LOG_IN_FAILURE',
        //     error: action.response.data,
        // });
    }
}

function* watchLogIn() {
    yield takeLatest('SOCIAL_LOG_IN_REQUEST', logIn);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
    ]);
}
import { all, fork} from 'redux-saga/effects';


// redux-saga 는 비동기 action을 수행
// fork는 비동기 함수 호출, call은 동기 함수 호출, all은 동시 실행,
// takeEvery는 무한루프 take는 한번 실행하면 사라짐, takeLatest는 마지막 요청만 응답
// throttle nms 동안 한번만 요청 함

import userSaga from './user';
import postSaga from './post';
import commentSaga from './comment';


export default function* rootSaga() {
    yield all([                             // root 사가 만들고 만들고 싶은 비동기 액션 넣어줌
        fork(userSaga),
        fork(postSaga),
        fork(commentSaga),
    ]);
}
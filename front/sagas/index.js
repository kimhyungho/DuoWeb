import { all, fork} from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';


export default function* rootSaga() {
    yield all([                             // root 사가 만들고 만들고 싶은 비동기 액션 넣어줌
        fork(postSaga),
        fork(userSaga),
    ]);
}
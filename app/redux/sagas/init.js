import { delay } from 'redux-saga';
import { take, call, put, race } from 'redux-saga/effects';

import { fetchHomePageSuccess, fetchUserPageSuccess } from '../actions/init';


export function* initHomePage() {
    yield take('INIT_HOME_PAGE');
    yield delay(200);
    yield put(fetchHomePageSuccess('home page'));
}

export function* initUserPage() {
    yield take('INIT_USER_PAGE');
    yield delay(300);
    yield put(fetchUserPageSuccess('user page'));
}

export default function* initSaga() {
    yield race([
        call(initHomePage),
        call(initUserPage),
    ]);
}

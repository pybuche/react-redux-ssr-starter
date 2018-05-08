import { all } from 'redux-saga/effects';

import initSaga from './sagas/init';


export default function* sagas() {
    yield all([
        initSaga(),
    ]);
}

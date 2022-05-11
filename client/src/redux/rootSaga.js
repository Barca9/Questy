import {all} from 'redux-saga/effects'
import {questsSaga} from "../ducks/quests/sagas";
import {authSaga} from "../ducks/auth/sagas";
import {questSaga} from "../ducks/blocksConstructor/sagas";

export function* rootSaga () {
    yield all([questsSaga(),authSaga(), questSaga()] );
}
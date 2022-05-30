import {all} from 'redux-saga/effects'
import {questsSaga} from "../ducks/quests/sagas";
import {authSaga} from "../ducks/auth/sagas";
import {constructorSaga} from "../ducks/constructor/sagas";

export function* rootSaga () {
    yield all([questsSaga(),authSaga(), constructorSaga()] );
}
import {all} from 'redux-saga/effects'
import {questsSaga} from "../ducks/quests/sagas";

export function* rootSaga () {
    yield all([questsSaga()]);
}
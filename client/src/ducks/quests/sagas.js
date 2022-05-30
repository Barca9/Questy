import {takeLatest, put, call} from 'redux-saga/effects'
import {
    ACTION_GET_DATA_FAILED,
    ACTION_GET_DATA_LIST_SUCCEED,
    GET_DATA_LIST_REQUESTED,
} from "./actions";
import createInstance from "../../services/axiosInstance";

const API = createInstance();

const urlGetQuests = "/api/quest"


export function* getQuestsListSaga() {
    try {
        const res = yield call(API.get, urlGetQuests);
        console.log(res.data)
        yield put(ACTION_GET_DATA_LIST_SUCCEED(res.data))

    } catch (error) {
        yield put(ACTION_GET_DATA_FAILED);
    }
}

export function* questsSaga() {
    yield takeLatest(GET_DATA_LIST_REQUESTED, getQuestsListSaga);

}
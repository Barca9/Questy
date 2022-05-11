import {takeLatest, put, call, select} from 'redux-saga/effects'
import {
    ACTION_GET_DATA_FAILED,
    ACTION_GET_DATA_LIST_SUCCEED,
    GET_DATA_LIST_REQUESTED,
    SEND_DATA_QUEST
} from "./actions";
import createInstance from "../../services/axiosInstance";

const API = createInstance();

export function* getQuestsListSaga(action) {
    try {
        const res = yield call(API.get, action.payload);
        yield put(ACTION_GET_DATA_LIST_SUCCEED(res.data))
    } catch (error) {
        yield put(ACTION_GET_DATA_FAILED);
    }
}

export function* sendQuestSaga(action) {
    try {
        const dataQuest = yield select((state) => state.blocks)
        const data = yield call(API.post, action.payload, dataQuest)
        console.log(data)
    } catch (e) {

    }
}


export function* questsSaga() {
    yield takeLatest(GET_DATA_LIST_REQUESTED, getQuestsListSaga);
    yield takeLatest(SEND_DATA_QUEST, sendQuestSaga);
}
import createInstance from "../../services/axiosInstance";
import {call, takeLatest, select} from "redux-saga/effects";
import {SAVE_QUEST} from "./actions";
import {getBlocksSelector} from "./selectors";

const API = createInstance();

export function* saveQuestSaga(action) {
    try{
        const dataQuest = yield select((getBlocksSelector))
        const res = yield call(API.post, action.payload.url,dataQuest)
    }catch (error) {
        console.log(error)
    }
}

export function* questSaga() {
    yield takeLatest(SAVE_QUEST, saveQuestSaga)
}
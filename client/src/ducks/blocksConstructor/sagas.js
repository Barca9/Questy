import createInstance from "../../services/axiosInstance";
import {call, takeLatest, select} from "redux-saga/effects";
import {SAVE_QUEST} from "./actions";
import {getConstructorSelector} from "./selectors";

const API = createInstance();

const urlSave = "/api/quest"

export function* saveQuestSaga() {
    try{
        const dataQuest = yield select(getConstructorSelector)
        const res = yield call(API.post, urlSave, dataQuest)
        console.log(res)
    }catch (error) {
        console.log(error)
    }
}


export function* questSaga() {
    yield takeLatest(SAVE_QUEST, saveQuestSaga)
}
import createInstance from "../../services/axiosInstance";
import {call, takeLatest} from "redux-saga/effects";
import {SAVE_QUEST} from "./actions";


const API = createInstance();

const urlSave = "/api/quest"

export function* saveQuestSaga(action) {
    try{
        const res = yield call(API.post, urlSave, action.payload)
        console.log(res)
    }catch (error) {
        console.log(error)
    }
}


export function* constructorSaga() {
    yield takeLatest(SAVE_QUEST, saveQuestSaga)
}
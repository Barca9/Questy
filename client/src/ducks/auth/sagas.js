import {call, put, select, takeLatest, takeEvery} from "redux-saga/effects";
import {REGISTRATION, AUTHORIZATION, CHANGE_TOKEN, ACTION_CHANGE_TOKEN} from "./actions";
import createInstance from "../../services/axiosInstance";
import {setToken} from "../../helpers/helperFunctions";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";
import {ACTION_GET_DATA_LIST_SUCCEED} from "../quests/actions";


const API = createInstance()

const urlRegister = 'api/auth/register';
const urlLogin = 'api/auth/login'

export function* registrationSaga(action) {
    try {
        const data = yield call(API.post, urlRegister, action.payload)
    } catch (error) {
        console.log(error)
    }
}


export function* authorizationSaga(action) {
    try {
        const {data} = yield call(API.post, urlLogin, action.payload)
        yield setToken(data.authToken)
    } catch (error) {
        console.log(error)
    }
}

export function* authSaga() {
    yield takeLatest(REGISTRATION, registrationSaga);
    yield takeLatest(AUTHORIZATION, authorizationSaga);

}





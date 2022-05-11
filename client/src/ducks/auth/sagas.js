import {call, select, takeLatest} from "redux-saga/effects";
import {REGISTRATION, AUTHORIZATION, REQUESTED_TOKEN} from "./actions";
import createInstance from "../../services/axiosInstance";
import {setToken} from "../../helpers/helperFunctions";
import {getAuthSelector} from "./selectors";

const API = createInstance()

const urlRegister = 'api/auth/register'

export function* authorizationSaga(action) {
    try {
        const response = yield call(API.post, action.payload.url, action.payload)
        let token = response.data.authToken
        setToken(token)
    } catch (error) {
        console.log(error)
    }

}

export function* registrationSaga(action) {
    try {
        /*const dataForRegistration = yield select(getAuthSelector)*/
        const data = yield call(API.post, action.payload.url, action.payload)
    } catch (error) {
        console.log(error)
    }

}


export function* authSaga() {
    yield takeLatest(REGISTRATION, registrationSaga);
    yield takeLatest(AUTHORIZATION, authorizationSaga);

}
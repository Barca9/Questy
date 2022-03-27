import {GET_DATA_FAILED, GET_DATA_LIST_REQUESTED, GET_DATA_LIST_SUCCEED, SEND_DATA_QUEST} from "./actions";

export const questsInitialState = {
    data: [],
    error: null,
    isLoading: false
}

export const questsReducer = (state = questsInitialState, action) => {

    switch (action.type){
        case GET_DATA_LIST_REQUESTED: return {
            ...state,
            isLoading: true,
            error: questsInitialState.error
        };

        case GET_DATA_LIST_SUCCEED: return {
            ...state,
            data: action.payload,
            isLoading: false
        };

        case GET_DATA_FAILED: return {
            ...state,
            error: action.payload.error,
            isLoading: false
        };

        case SEND_DATA_QUEST:
            console.log('reducer')
            return {
            ...state
        }
        default: return {...state}
    }
}
import {REQUESTED_TOKEN} from "./actions";
import {REGISTRATION} from "./actions";
import {AUTHORIZATION} from "./actions";


export const authInitialState = {
    email:'',
    password:'',
    token:''
}

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case REQUESTED_TOKEN: return {
            ...state
        };
        case AUTHORIZATION: return {
            ...state,
            token: action.payload,
            email: action.payload.email,
            password: action.payload.payload
        };
        case REGISTRATION: return {
            ...state,
            email: action.payload.email,
            password: action.payload.payload
        };

        default: return {...state}
    }
}
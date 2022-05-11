export const REQUESTED_TOKEN = 'GET_REQUESTED_TOKEN';
export const AUTHORIZATION = 'AUTHORIZATION';
export const REGISTRATION = 'REGISTRATION';

export const ACTION_REQUESTED_TOKEN = (payload) => {
    return {
        type: REQUESTED_TOKEN,
        payload
    }
}

export const ACTION_AUTHORIZATION = (payload) => {
    return {
        type: AUTHORIZATION,
        payload
    }
}

export const ACTION_REGISTRATION = (payload) => {
    return {
        type: REGISTRATION,
        payload
    }
}

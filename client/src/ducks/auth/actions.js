export const CHANGE_TOKEN = 'CHANGE_TOKEN';
export const AUTHORIZATION = 'AUTHORIZATION';
export const REGISTRATION = 'REGISTRATION';

export const ACTION_CHANGE_TOKEN = (payload) => {
    return {
        type: CHANGE_TOKEN,
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

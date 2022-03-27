export const CREATE_CONTENT_BLOCK = 'CREATE_CONTENT_BLOCK';
export const RECORD_INITIAL_BLOCK = 'RECORD_INITIAL_BLOCK';
export const RECORD_FINALLY_BLOCK = 'RECORD_FINALLY_BLOCK';
export const RECORD_CONTENT_BLOCK = 'RECORD_CONTENT_BLOCK';
export const DELETE_CONTENT_BLOCK = 'DELETE_CONTENT_BLOCK';


export const ACTION_CREATE_CONTENT_BLOCK = (payload) => {
    return {
        type: CREATE_CONTENT_BLOCK,
        payload
    }
}

export const ACTION_RECORD_INITIAL_BLOCK = (payload) => {
    return {
        type: RECORD_INITIAL_BLOCK,
        payload
    }
}

export const ACTION_RECORD_FINALLY_BLOCK= (payload) => {
    return {
        type: RECORD_FINALLY_BLOCK,
        payload
    }
}

export const ACTION_RECORD_CONTENT_BLOCK = (payload) => {
    return {
        type: RECORD_CONTENT_BLOCK,
        payload
    }
}

export const ACTION_DELETE_CONTENT_BLOCK = (payload) => {
    return{
        type: DELETE_CONTENT_BLOCK,
        payload
    }
}


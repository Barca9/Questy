export const CREATE_CONTENT_BLOCK = 'CREATE_CONTENT_BLOCK';
export const RECORD_CONTENTS_BLOCKS = 'RECORD_CONTENTS_BLOCKS';
export const DELETE_CONTENT_BLOCK = 'DELETE_CONTENT_BLOCK';


export const ACTION_CREATE_CONTENT_BLOCK = (payload) => {
    return {
        type: CREATE_CONTENT_BLOCK,
        payload
    }
}

export const ACTION_RECORD_CONTENTS_BLOCKS = (payload) => {
    return {
        type: RECORD_CONTENTS_BLOCKS,
        payload
    }
}

export const ACTION_DELETE_CONTENT_BLOCK = (payload) => {
    return{
        type: DELETE_CONTENT_BLOCK,
        payload
    }
}


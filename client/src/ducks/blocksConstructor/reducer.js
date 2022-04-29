import {
    CREATE_CONTENT_BLOCK,
    DELETE_CONTENT_BLOCK,
    RECORD_CONTENTS_BLOCKS,
} from "./actions";


export const blocksConstructorInitialState = {
    name: '',
    title: '',
    contents: [
        {   id: Math.random().toString(32).substr(2, 10),
            title: '',
            text: '',
        },
        {   id: Math.random().toString(32).substr(2, 10),
            title: '',
            text: '',
        },
        {   id: Math.random().toString(32).substr(2, 10),
            title: '',
            text: '',
        }
    ],
    status: '',
    id:''
};



export const blocksConstructorReducer = (state = blocksConstructorInitialState, action) => {
    switch (action.type) {
        case RECORD_CONTENTS_BLOCKS:
            return {
                ...state,
                ...state.contents.map((item) => {
                    if (item.id === action.payload.id) {
                        item.title = action.payload.title
                        item.text = action.payload.text
                    }
                })
            };
        case CREATE_CONTENT_BLOCK:
            let result = [...state.contents]
            result.splice(-1,0,{
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text
            })
            return {
                ...state,
                contents:result
            };
        case DELETE_CONTENT_BLOCK:
            return {
                ...state,
                contents: state.contents.filter((item) => item.id !== action.payload)
            };
        default:
            return {...state}
    }
}

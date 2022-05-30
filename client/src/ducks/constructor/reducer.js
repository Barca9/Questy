import {
    CREATE_CONTENT_BLOCK,
    DELETE_CONTENT_BLOCK,
    RECORD_CONTENTS_BLOCKS,
    SAVE_QUEST
} from "./actions";
import {generateId} from "../../helpers/helperFunctions";


export const constructorInitialState = {
    name: '',
    title: '',
    contents: [
        {   id: generateId(),
            title: '',
            text: '',
        },
        {   id: generateId(),
            title: '',
            text: '',
        },
        {   id: generateId(),
            title: '',
            text: '',
        }
    ],
    status: ''
};



export const constructorReducer = (state = constructorInitialState, action) => {
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
        case SAVE_QUEST:
            return {
                ...state,
            }
        default:
            return {...state}
    }
}

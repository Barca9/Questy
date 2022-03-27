import {
    CREATE_CONTENT_BLOCK,
    DELETE_CONTENT_BLOCK,
    RECORD_CONTENT_BLOCK,
    RECORD_FINALLY_BLOCK,
    RECORD_INITIAL_BLOCK
} from "./actions";


export const blocksConstructorInitialState = {
    initialBlock: {
        name: '',
        title: '',
        target: '',
    },
    contentBlocks: [{
        id: Math.random().toString(32).substr(2, 10),
        type:'text-block',
        order: '',
        nameStep: '',
        content: ''
    }],
    finallyBlock: {
        finallyMessage: ''
    }
};

export const blocksConstructorReducer = (state = blocksConstructorInitialState, action) => {
    console.log(action)
    switch (action.type) {
        case RECORD_INITIAL_BLOCK:
            return {
                ...state,
                initialBlock: {
                    name: action.payload.name,
                    title: action.payload.title,
                    target: action.payload.target
                }
            };
        case RECORD_FINALLY_BLOCK:
            return {
                ...state,
                finallyBlock: {
                    finallyMessage: action.payload.finallyMessage,
                }
            };
        case RECORD_CONTENT_BLOCK:
            return {
                ...state,
                ...state.contentBlocks.map((item)=> {
                    if (item.id === action.payload.id) {
                            item.order = action.payload.order
                            item.nameStep = action.payload.nameStep
                            item.content = action.payload.content
                    }
                })
            };
        case CREATE_CONTENT_BLOCK:
            return {
                ...state,
                contentBlocks: [...state.contentBlocks, {
                    id: action.payload.id,
                    type: action.payload.type,
                    nameStep: action.payload.nameStep,
                    content: action.payload.content
                }]
            };
        case DELETE_CONTENT_BLOCK:
            return {
                ...state,
                contentBlocks: state.contentBlocks.filter((item)=> item.id !== action.payload)
            };
        default:
            return {...state}
    }
}

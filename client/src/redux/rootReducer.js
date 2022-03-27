import {questsReducer} from "../ducks/quests/reducer";
import {blocksConstructorReducer} from "../ducks/blocksConstructor/reducer";

export const rootReducer = {
    quests: questsReducer,
    blocks: blocksConstructorReducer,
}
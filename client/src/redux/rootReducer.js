import {questsReducer} from "../ducks/quests/reducer";
import {blocksConstructorReducer} from "../ducks/blocksConstructor/reducer";
import {authReducer} from "../ducks/auth/reducer";

export const rootReducer = {
    quests: questsReducer,
    blocks: blocksConstructorReducer,
    auth: authReducer
}
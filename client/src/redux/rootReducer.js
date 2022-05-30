import {questsReducer} from "../ducks/quests/reducer";
import {constructorReducer} from "../ducks/constructor/reducer";
import {authReducer} from "../ducks/auth/reducer";

export const rootReducer = {
    quests: questsReducer,
    constructor: constructorReducer,
    auth: authReducer
}
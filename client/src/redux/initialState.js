import {questsInitialState} from "../ducks/quests/reducer";
import {constructorInitialState} from "../ducks/constructor/reducer";
import {authInitialState} from "../ducks/auth/reducer";

export const initialState = {
    quests: questsInitialState,
    constructor: constructorInitialState,
    auth: authInitialState
}
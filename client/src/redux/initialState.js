import {questsInitialState} from "../ducks/quests/reducer";
import {blocksConstructorInitialState} from "../ducks/blocksConstructor/reducer";
import {authInitialState} from "../ducks/auth/reducer";

export const initialState = {
    quests: questsInitialState,
    blocks: blocksConstructorInitialState,
    auth: authInitialState
}
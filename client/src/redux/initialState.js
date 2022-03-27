import {questsInitialState} from "../ducks/quests/reducer";
import {blocksConstructorInitialState} from "../ducks/blocksConstructor/reducer";

export const initialState = {
    quests: questsInitialState,
    blocks: blocksConstructorInitialState,
}
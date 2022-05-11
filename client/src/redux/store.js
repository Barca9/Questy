import {createStore, applyMiddleware, compose, combineReducers} from "redux"
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./rootSaga";
import {rootReducer} from "./rootReducer";
import {initialState} from "./initialState";

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];
/*const enhancers = [devToolsExtension()]
const composedEnhancers = compose(applyMiddleware(...middlewares),...enhancers)*/

const composedEnhancers = compose(applyMiddleware(...middlewares))

const store = createStore(combineReducers({...rootReducer}),initialState, composedEnhancers)

sagaMiddleware.run(rootSaga);

export default store



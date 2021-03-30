import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import incidentReducer from "./incident-reducer";
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "./saga/rootSaga";
import registerReducer from "./register-reducer";

let reducers = combineReducers({
    auth: authReducer,
    register: registerReducer,
    incident: incidentReducer
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>

const sagaMiddleware = createSagaMiddleWare();

let store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
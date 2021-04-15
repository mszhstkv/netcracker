import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from 'redux/saga/rootSaga';
import { authReducer, incidentReducer, registerReducer } from 'redux/reducers';

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer,
    incident: incidentReducer
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

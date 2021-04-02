import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import authReducer from 'redux/reducers/auth-reducer';
import incidentReducer from 'redux/reducers/incident-reducer';
import rootSaga from 'redux/saga/rootSaga';
import registerReducer from 'redux/reducers/register-reducer';

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

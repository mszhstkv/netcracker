import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from 'redux/saga/root.saga';
import { authReducer, incidentReducer, registerReducer } from 'redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer,
    incident: incidentReducer
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;

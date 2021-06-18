import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

//configureStore.js - for centralized state management store configuration in case of multiple reducers.
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootSaga from './rootSaga';

import homeReducer from './containers/home/reducer';

const rootReducer = combineReducers({
  homeReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

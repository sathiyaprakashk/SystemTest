import { applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/rootSaga';
import { rootReducer } from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
let middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export default store;

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "core/reducers";
import mySaga from "core/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;

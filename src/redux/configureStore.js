import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../redux/rootReducer";
import sagas from "../redux/rootSaga";

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

export default (data = {}) => {
  const store = createStore(reducers, data, middleware);
  sagaMiddleware.run(sagas);
  return store;
};
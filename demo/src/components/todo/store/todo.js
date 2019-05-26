import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import reducer from "../reducer/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// store configuration
// #1 middleware extends dispatch

const thunk = store => next => action =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
const logger = store => {
  return next => {
    return action => {
      console.log("dispacting", action);
      // let result =
      next(action);
      console.log("next state", store.getState());
      // return result;
    };
  };
};
const middlewares = [applyMiddleware(thunk, logger)];
if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

// #2 enhancers to add extra functionality to createStore
const round = number => Math.round(number * 100) / 100;
const monitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer
) => {
  const monitorReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action); // store core functionality
    const end = performance.now();
    const diff = round(end - start);
    console.log("reducer process time", diff);
    return newState;
  };
  // monitorReducer wrap the root reducer in createStore
  return createStore(monitorReducer, initialState, enhancer);
};

const store = createStore(
  reducer,
  undefined, // initial state must to pass to configed createStore
  compose(
    ...middlewares,
    monitorReducerEnhancer
  ) // compose all enhancer, applyMiddlewares is an enhancer as well
);

export const storeConfiguration = preloadState => {
  const middlewares = [logger, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  return createStore(reducer, preloadState, composedEnhancers);
};

export default store;
// wrappedReducer = (state,action)=>{newState = reducer(state,action);other logic; return newState}
// extened rootReducer
// enhancer = createStore => (rootReducer,initialState,action) => createStore(wrappedReducer,initialState,enhancer)
// middleware = store => next => action =>{ other logic; next(action) }

// enhacer wraps logic around root reducer, give wrapped reducer to createStore
// middleware warps logic arount dispatch, give dispatch to store

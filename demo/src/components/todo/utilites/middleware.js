// middleware
const middleware = store => next=> action =>{
  //do something
  next(action) // next = store.dispatch
} 


// middleware wrap dispatch and pass it next
const action = addTodo("middleware log");
// extend a process of dispatching action
const dispatchAndLog = (store, action) => {
  console.log("dispacting", action);
  store.dispatch(action);
  console.log("next state", store.getState());
};

// wrap extended dispatch and return the newState
const patchStoreToAddLogging = store => {
  const next = store.dispatch;
  store.dispatch = action => {
    console.log("dispacting", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  };
};

// return a function to return a function extended and return the newState
const logger = store => {
  const next = store.dispatch;
  return action => {
    console.log("dispacting", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  };
};

const applyMiddlewareByMonkeypatching = (store, middlewares) => {
  middlewares = middlewares.slice();
  middlewares.reverse();

  // Transform dispatch function with each middleware.
  middlewares.forEach(middleware => (store.dispatch = middleware(store)));
};
applyMiddlewareByMonkeypatching(store, [logger, crashReporter]);

// pass dispatch to middleware instead of inside
const logger = store => {
  return next => {
    return action => {
      console.log("dispacting", action);
      let result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
};
const applyMiddleware = (store, middlewares) => {
  middlewares = middlewares.slice();
  middlewares.reverse();
  let dispatch = store.dispatch
  // Transform dispatch function with each middleware.
  // pass store and dispatch to every middleware function
  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
  return Object.assign({}, store, { dispatch })
};
applyMiddleware(store, [logger, crashReporter]);
// 
middlewares = middlewares.slice(); 
middlewares.reverse(); // [crashReporter,logger]
let dispatch = store.dispatch
// Transform dispatch function with each middleware.
// pass store and dispatch to every middleware function
middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
dispatch = crashReporter(store)(dispatch) = (action)=>{return state}
dispatch = logger(store)(dispatch) = (action)=>{return state}

// (action)=>{return state} is passed through the chain
// in the pipe, all side effect applys 


const todoApp = combineReducers(reducers)
const store = createStore(
  todoApp,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(logger, crashReporter)
)
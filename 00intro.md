# redux
redux a predictable state management for javascript
it provides a time traveling debugger for development

## core concept
action: define how ui action will influence on component state
reducer: define the logic of state's change according to each action
dispatch: trigger reducer(action) in ui

## three principles
single source of truth: all state store in an object of unique store
state is read-only; they only way to change state is to emit an action; 
changes are made with pure function, pure reducer makes sure every change result new state instead of mutating state
which makes state easy to maintain and track current state and future state

## data flow


## use
1. design state object
2. design actions based on application logic; action object or action creator
3. design reducer based on actions and state, initiate state with default state; combine reducers together by combineReducers
4. initial store on the top level component createStore(reducer,)
5. design middleware like thunk log to add handler in the stream of state createStore(reducer,middlewares)
6. combine react and redux by react-redux, provider component to distribute state  <provider store=store />
7. connect children component to refer state of redux, connect(mapStateToProps(){return {...state}},mapDispatchToPros(){return ...actions}(component)
8. use state and dispatch in container components as props 
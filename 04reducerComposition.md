# Refactoring Reducer Logic Using Functional Decomposition and Reducer Composition

use functional programming to refactor a large reducer to a compostion of several smaller functions

## advangtages

1. easy to test
2. easy to read
3. easy to debug
4. easy to extend

## composition

- utility function
- case reducer
- slice reducer
- root reducer

### utility function

1. refactor the calculation of state, (state) => newState
   E.g. updateArray = (array,item,callback) => newArray; updateObject = (object,item,callback)=> newObject
2. to reducer boilerplate
   E.g. reducerGenerator(state,stateHandlers)=> reducer = (state,action)=>newState
3. hof return new reducer with givin reducer
   E.g. combineReducers({state:subReducer}) => rootReducer

### case Reducer

a function handling specific action (state,action) => newState

### subReducer

a function handling specific a slice of state based on own logic
E.g. FilterReducer, ListReducer, FetchingReducer

## whole structure

rootReducer = combineReducer ({
domain1: domain1Reducer = reducerGenerator(initState,handlers1)
domain2: domain2Reducer = reducerGenerator(initState,handlers2)
})
handlers1 = {
case1:caseReducer1 = (caseState,action) => {const newState = utility1Function(caseState,action); return newState}
case2:caseReducer2 = (caseState,action) => {const newState = utility2Function(caseState,action); return newState}
}

## file structure

-reducer
--reducerUtility.js
--domainReducer.js
--index/RootReducer.js

## Sharing data between slice reducers

1. add share state login at the root level of reducer, pass state to a specific slice reducer
   rootReducer = (state,action)=>{
   return {
   a:sliceAReducer(state.a,action,state);
   pass whole state
   b:sliceBRedcuer(state.b,action,state.a)
   pass specfic state
   }
   }
2. a thunk that getState() before dispatch action
   shareStateAction = ()=>(dispatch,getState)=>{stateB = getState().b; dispatch({action,stateB})}
3. add a share state reducer handle the state return by combineReducer, then return state as a new Reducer
   const rootReducer = (state,action)=>{
   return shareStateReducer(combineReducer(state,action),action)
   }

## 
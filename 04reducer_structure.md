# reducer and state structure

reducer -> single + initial state + always return new state + no change no new state
state -> app state + domain state + ui state
domain state : application need to show use or modify (data fetched from server)
app state: application behaviour ( what application is doing : fetching isSignedIn )
ui state: how the ui currently display (isShowModal, isHide, )

1. define your state shape in terms of your domain data and app state, not your UI component tree.
2. divided data to subtree, top level state key represent domain state or app state

## imutable update
1. deep copy: nested copy object by ... every level
2. intert or remove array : [... ] to insert and filter(cb) to remove
3. update array : map(cb)
4. third library
5. redux start kit include createReducer to immutable update method

## splitting reducer logic
1. make reducer function small and specify only one thing
2. split some reducer into another function to compose other reducer (reducer in a reducer)
3. small utility function contain useable logic needed in multiple places
4. function handling a specific update, usually need other parameters 
5. handle all update for a slice of state
6. root reducer : createStore(rootReducer)
7. slice reducer : combineReducer(sliceReducers)
8. case function : (input)=>{ handle input for action ; return reducer(state,action){}}
9. higher order reducer: (reducer)=>{deal with reducer return reducer()}
10. reducer: (state,action)=>{Newstate}
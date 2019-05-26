# actions

convention of actions

1. constant action types
   const ADD_TODO = "ADD_TODO"

2. prefer action creator than object
   easy to maintain and extend, like extend to a middleware

3. write a function that generates an action creator
   write plain or use redux-act and redux-action

4. async action creator
   dispatch multiple action in a process that combined into a single function;
   compose all actions dispatch logic into one single action
   move the logic from component to redux action
   async action creater => { doinit, result?doComplete:doError};
   thunk or saga can dipatch this function

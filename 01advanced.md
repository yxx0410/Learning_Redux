# Advanced 

## async action
an action is a process involved other logic or multiple actions instead of single state change

for example of fetch api
a process: start fetch -> fetching -> fetch successfully or fetch failed
multiple state: isFetching -> isLoaded -> isError
other logic: generateUrl with state 
conditional actions: isLoaded or isError
overall: combine all process of fetch data to a single action process

asynchronous middleware like thunk allow to dispatch a function or promise instead of an action
a Promise middleware can intercept Promises and dispatch a pair of begin/end actions asynchronously in response to each Promise.
middleware(dispatch(startFetch)-> fetch -> dispatch(endFetch))

## middleware
let you do something between dispatch an action and call reducer in store
middleware extend the dispatch content to do other logic like fetch, log instead of action only,
it wrapped dispatch and pass it to next middleware,
at the end of middleware chain, the dipatch must call an action to run redux data flow from store



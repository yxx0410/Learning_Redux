# store

store = createStore (reducer, defaultState, enhancer)
Provider(store)

middleware: extend dispatch
enhancer: extend store like apply middlewares

applyMiddleware: an enhancer

## store configuration

a function create a store with enhancer, middleware, reducer

configurationStore = ()=>{
middlewareEnhancer:array = applyMiddleware(thunk,log,...)
composedEnhancer:array = composed(enhancer1,enhancer2...)
store = create(reducer,defaultState,composedEnhancer)
return store
}

## redux dev-tool

use redux dev-tool

const composedEnhancers = composeWithDevTools(...enhancers);

## Hot reloading

to avoid reload application by every code change
watch a file or directory so that application will be reload only watched code changed

Bundlers like Webpack and Parcel support a module.hot.accept method to specify which module should be hot reloaded. HotModuleReplacementPlugin

to watch reducer to load store only reducer change:
const configurationStore = () =>{
if (process.env.NODE_ENV !== 'production' && module.hot) {
module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}
return store
}
to watch a component to load component only its code change
usually used in root component 
const renderApp ()=>{}
if (process.env.NODE_ENV !== 'production' && module.hot) {
module.hot.accept('./filename', () => renderApp())
}
renderApp()

import { createStore, compose, applyMiddleware } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (reducers, middlewares) => {
    const enhancer = composeEnhancers(applyMiddleware( ...middlewares))

    return createStore(reducers, enhancer)
}
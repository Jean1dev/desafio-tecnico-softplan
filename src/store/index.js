import { persistStore } from 'redux-persist'
import createStore from './createStore'
import persistedReducers from './persistReducer'
import rootReducer from './modules/rootReducer'

const middlewares = []
const store = createStore(persistedReducers(rootReducer), middlewares)
const persistor = persistStore(store)

export { store, persistor }
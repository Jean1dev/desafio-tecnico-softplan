import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
    const persistedReducers = persistReducer({
        key: 'desafio-softplan',
        storage
    }, 
        reducers
    )

    return persistedReducers
}
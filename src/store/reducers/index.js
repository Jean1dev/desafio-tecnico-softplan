import { combineReducers } from 'redux'
import persistReducers from './persistReducer'
import search from '../modules/search/reducer'
import heros from '../modules/heros/reducer'

const _hero = persistReducers(heros)

export default function handleReducers() {
    return combineReducers({
        _hero,
        search,
    })
}
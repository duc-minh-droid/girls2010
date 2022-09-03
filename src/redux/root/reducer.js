import userReducer from '../user/reducer'
import { combineReducers} from 'redux'
import storage from "redux-persist/lib/storage"
import {persistReducer} from 'redux-persist'

export const rootReducer = combineReducers({
    user: userReducer,
})

const config = {
    key: 'root',
    storage,
    whitelist: ['user']
}

export default persistReducer(config, rootReducer)
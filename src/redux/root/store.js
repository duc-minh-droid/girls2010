import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import logger from 'redux-logger'
import { persistStore} from 'redux-persist'

const middlewares = []
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
export default store
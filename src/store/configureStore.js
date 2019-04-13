import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'
import LocalForage from 'localforage'

import { createRootReducer } from './rootReducer'

const persistConfig = {
  key: '34sdfskjefejfk',
  storage: LocalForage,
  blacklist: ['router','form'],
}

export const configureStore = history => {
  const composeEnchancers =
    (process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  const middlewares = [routerMiddleware(history), thunk]

  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history),
  )

  const store = createStore(
    persistedReducer,
    composeEnchancers(applyMiddleware(...middlewares)),
  )
  const persistor = persistStore(store)

  return { store, persistor }
}

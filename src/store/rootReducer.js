import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as formReducer } from 'redux-form'

import { reducer as template } from './template/reducer'
import { reducer as signIn } from './signIn/reducer'
import { reducer as confirm } from './confirm/reducer'

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
      template,
    signIn,
    confirm,
    form:formReducer
  })

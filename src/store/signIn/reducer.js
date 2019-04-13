import * as types from './types'

const initialState = {
  value: '',
  status: '',
}

export const reducer = (state = initialState, action) => {
/*  console.log(action)
  console.log('state', state)*/

  switch (action.type) {
    case types.CHANGE_NUMBER:
      return {
        ...state,
        value: action.payload.value,
      }
    case types.START:
      return {
        ...state,
        status: 'loading',
      }
    case types.DONE:
      return {
        ...state,
        status: 'success',
      }
    case types.FAILURE:
      return {
        ...state,
        status: 'failure',
      }
    case types.RESET:
      return {
        value: '',
        status: '',
      }
    default:
      return state
  }
}

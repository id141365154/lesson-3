import * as types from './types'

const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEMPLATE_TYPE:
      return {
        ...state,
      }
    default:
      return state
  }
}

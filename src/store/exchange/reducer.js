import * as types from './types'

const initialState = {
  country_1: '',
  country_2: '',
}

export const reducer = (state = initialState, action) => {
/*  console.log(action)
  console.log('state', state)*/

  switch (action.type) {
    case types.OPEN_SELECT:{
      console.log(state, action)
      return {
        ...state,
        value: action.payload.value,
      }
    }
    default:
      return state
  }
}

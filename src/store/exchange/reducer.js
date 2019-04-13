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
      return {
        ...state,
        change: action.payload.value,
      }
    }

    case types.SET_COUNTRY:{
      return {
        ...state,
        [state.change]: action.payload.value
        //value: action.payload.value,
      }
    }

    default:
      return state
  }
}

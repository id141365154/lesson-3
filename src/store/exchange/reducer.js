import * as types from './types'
//import { UPDATE_SUM_1, UPDATE_SUM_2 } from './actions'
//import { createAction, createReducer } from 'redux-act'

const initialState = {
  country_1: {
    id: '',
    title: '',
  },
  country_2: {
    id: '',
    title: '',
  },
  time_from: {
    h: '',
    m: '',
  },
  time_to: {
    h: '',
    m: '',
  },
  sum_1: '',
  sum_2: '',
  exchangeKoef:84.19,
}


/*
export const currency = createReducer({
  [UPDATE_SUM_1]: (state, payload, meta) => {


    /!*let newState = { ...state }
    if (meta.field == 'sum_1') {
      newState.sum_2 = state.sum_1 * state.exchangeKoef
    }

    if (meta.field == 'sum_2') {
      newState.sum_1 = state.sum_2 / state.exchangeKoef
    }*!/
    console.log('currency state',state)
    return state
  },
}, {
  exchangeKoef: 60,
  sum_1: 1,
  sum_2: 60,

}) // <-- This is the default state
*/


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SUMS: {
      console.log(state)
      let newState = { ...state }
      if (action.payload.props.input.name == 'sum_1') {
        newState.sum_1 = action.payload.value
        newState.sum_2 = action.payload.value / state.exchangeKoef
      }

      if (action.payload.props.input.name == 'sum_2') {
        newState.sum_2 = action.payload.value
        newState.sum_1 = action.payload.value * state.exchangeKoef
      }
      return newState
    }
    case types.OPEN_SELECT: {
      return {
        ...state,
        change: action.payload.value,
      }
    }
    case types.SET_COUNTRY: {
      let newState = { ...state }
      newState[state.change] = action.payload.value
      return newState
    }

    case types.SET_TIME: {
      return {
        ...state,
      }
    }

    case types.OPEN_TIME_SELECT: {
      return {
        ...state,
        'time_to_change': action.payload.value,
        //value: action.payload.value,
      }
    }

    case types.HOURS_CHANGE: {
      let newState = { ...state }
      newState[state.time_to_change].h = action.payload.value
      return newState
    }

    case types.MINUTES_CHANGE: {
      let newState = { ...state }
      newState[state.time_to_change].m = action.payload.value
      return newState
    }

    default:
      return state
  }
}

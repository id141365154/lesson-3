import * as types from './types'

const initialState = {
  country_1: {
    id:'',
    title:''
  },
  country_2: {
    id:'',
    title:''
  },
  time_from: {
    h:'',
    m:''
  },
  time_to: {
    h:'',
    m:''
  },
  sum_1:'',
  sum_2:''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_SELECT:{
      return {
        ...state,
        change: action.payload.value,
      }
    }

    case types.SET_COUNTRY:{
      let newState = {...state}
      newState[state.change] = action.payload.value;
      return newState;
    }

    case types.SET_TIME:{
      return {
        ...state,
      }
    }

    case types.OPEN_TIME_SELECT:{
      return {
        ...state,
        'time_to_change': action.payload.value
        //value: action.payload.value,
      }
    }

    case types.HOURS_CHANGE:{
      let newState = {...state}
      newState[state.time_to_change].h = action.payload.value
      return newState
    }

    case types.MINUTES_CHANGE:{
      let newState = {...state}
      newState[state.time_to_change].m = action.payload.value
      return newState
    }

    default:
      return state
  }
}

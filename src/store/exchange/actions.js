import * as types from './types'

export const openSelect = value => ({
  type: types.OPEN_SELECT,
  payload: {
    value,
  },
})


export const setCountry = value => ({
  type: types.SET_COUNTRY,
  payload: {
    value,
  },
})


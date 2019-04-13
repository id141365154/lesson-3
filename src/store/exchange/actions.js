import * as types from './types'

export const openSelect = value => ({
  type: types.OPEN_SELECT,
  payload: {
    value,
  },
})

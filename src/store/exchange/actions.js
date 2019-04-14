import * as types from './types'
import { createAction } from 'redux-act'


//export const UPDATE_SUM_1 = createAction('UPDATE_SUM_1');
//export const UPDATE_SUM_2 = createAction('update sum 2');


export const updateSums =( value ,props) => ({
  type: types.UPDATE_SUMS,
  payload: {
    value,
    props
  },
})

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


export const openTimeSelect = value => ({
  type: types.OPEN_TIME_SELECT,
  payload: {
    value,
  },
})


export const setTime = value => ({
  type: types.SET_TIME,
  payload: {
    value,
  },
})

export const updateForm_sum_1 = value => (
  {
    type: '@@redux-form/CHANGE',
    meta: {
      form: 'ExchangeForm',
      field: 'sum_1',
      touch: true,
      persistentSubmitErrors: false
    },
    payload: value
  }
)

export const updateForm_sum_2 = value => (
  {
    type: '@@redux-form/CHANGE',
    meta: {
      form: 'ExchangeForm',
      field: 'sum_2',
      touch: true,
      persistentSubmitErrors: false
    },
    payload: value
  }
)

export const updateForm_agree = value => (
  {
    type: '@@redux-form/CHANGE',
    meta: {
      form: 'ExchangeForm',
      field: 'agree',
      touch: true,
      persistentSubmitErrors: false
    },
    payload: value
  }
)

export const updateForm_setTime_from = value => (
  {
    type: '@@redux-form/CHANGE',
    meta: {
      form: 'ExchangeForm',
      field: 'delivery_time_from',
      touch: true,
      persistentSubmitErrors: false
    },
    payload: value
  }
)

export const updateForm_setTime_to = value => (
  {
    type: '@@redux-form/CHANGE',
    meta: {
      form: 'ExchangeForm',
      field: 'delivery_time_to',
      touch: true,
      persistentSubmitErrors: false
    },
    payload: value
  }
)

export const updateForm_setCountry_1 = value => (
  {
    type: '@@redux-form/CHANGE',
    meta: {
      form: 'ExchangeForm',
      field: 'country_1',
      touch: true,
      persistentSubmitErrors: false
    },
    payload: value
  }
)

export const updateForm_setCountry_2 = value => (
  {
    type: '@@redux-form/CHANGE',
    meta: {
      form: 'ExchangeForm',
      field: 'country_2',
      touch: true,
      persistentSubmitErrors: false
    },
    payload: value
  }
)


export const hoursChange = value => ({
  type: types.HOURS_CHANGE,
  payload: {
    value,
  },
})

export const minutesChange = value => ({
  type: types.MINUTES_CHANGE,
  payload: {
    value,
  },
})


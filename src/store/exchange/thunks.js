import { push } from 'connected-react-router'

import { routes } from '../../routes'
import * as actions from './actions'
import { disbatch } from 'redux-act'
import { getSum1, getSum2 } from './selectors'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const formatTime = (h, m) => {
  let H = h < 10 && h > 0 ? '0' + h : h
  let M = m < 10 && m > 0 ? '0' + m : m

  H = H == '' ? '00' : H
  M = M == '' ? '00' : M

  return H + ':' + M
}

export const getSums = (value, props) => async (dispatch, getState) =>{
  let state = getState();
  return {
    sum1: getSum1(state),
    sum2: getSum1(state)
  }

}

export const updateSums = (value, props) => async (dispatch, getState) =>{
  let state = getState();
  dispatch(actions.updateSums(value, props))
  setTimeout(function(){
    let state = getState();
    dispatch(actions.updateForm_sum_1(getSum1(state)))
    dispatch(actions.updateForm_sum_2(getSum2(state)))
  },100)

}

export const select = (value) => async (dispatch, getState) => {
  dispatch(actions.openSelect(value))
  dispatch(push(routes.SELECT_COUNTRY))
}


const toExchange = (value, dispatch, getState) => {
  dispatch(push(routes.EXCHANGE))
  let state = getState()
  setTimeout(function() {
    if (state.exchange.country_1.id != '') {
      dispatch(actions.updateForm_setCountry_1(state.exchange.country_1))
    }
    if (state.exchange.country_2.id != '') {
      dispatch(actions.updateForm_setCountry_2(state.exchange.country_2))
    }

    dispatch(actions.updateForm_setTime_from(formatTime(state.exchange.time_from.h, state.exchange.time_from.m)))
    dispatch(actions.updateForm_setTime_to(formatTime(state.exchange.time_to.h, state.exchange.time_to.m)))
  }, 300)
}

export const setCountry = (value) => async (dispatch, getState) => {
  dispatch(actions.setCountry(value))
  toExchange(value, dispatch, getState)
}


export const setTime = (value) => async (dispatch, getState) => {
  dispatch(actions.setTime())
  toExchange(value, dispatch, getState)
}

export const openTimeSelect = (value) => async (dispatch, getState) => {
  dispatch(actions.openTimeSelect(value))
  dispatch(push(routes.SELECT_TIME))
}


export const backToExchange = (value) => async (dispatch, getState) => {
  toExchange(value, dispatch, getState)
}


export const hoursChange = (value) => async (dispatch, getState) => {
  dispatch(actions.hoursChange(value))
}

export const minutesChange = (value) => async (dispatch, getState) => {
  dispatch(actions.minutesChange(value))
}

export const agreePress = (value) => async (dispatch, getState) => {
  let state = getState()
  let res = true
  if (state.form.ExchangeForm.values.agree === true) {
    res = false
  }
  dispatch(actions.updateForm_agree(res))
}


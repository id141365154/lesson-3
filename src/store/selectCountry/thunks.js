import { push } from 'connected-react-router'

import { routes } from '../../routes'
import * as actions from './actions'
//import { getNumberValue } from './selectors'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const select = (value) => async (dispatch, getState) => {
    dispatch(actions.openSelect(value))
    dispatch(push(routes.SELECT))
}

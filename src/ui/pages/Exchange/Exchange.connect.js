import { connect } from 'react-redux'

//import { getNumberValue, getStatus } from '@store/signIn/selectors'
//import { changeNumber } from '@store/signIn/actions'
import { select } from '@store/exchange/thunks'
import { Exchange } from './Exchange'

import { reduxForm } from 'redux-form'

import {validate} from './Exchange.validate'

const mapStateToProps = state => ({
  value: state.exchange,
  initialValues: {  // Пробросится ниже в ReduxForm
    country_1:"RF",
    country_2:"USA"
  }
})


export const ExchangeContainer = connect(
  mapStateToProps,
  { select },
)(reduxForm({
  form: 'ExchangeForm', // a unique identifier for this form
  onSubmit: values=>{console.log('values', values)},
  validate
})(Exchange))

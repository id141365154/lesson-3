import { connect } from 'react-redux'

//import { getNumberValue, getStatus } from '@store/signIn/selectors'
//import { changeNumber } from '@store/signIn/actions'
import { select, openTimeSelect } from '@store/exchange/thunks'
import { Exchange } from './Exchange'

import { reduxForm } from 'redux-form'

import {validate} from './Exchange.validate'

const mapStateToProps = state => ({
  value: state.exchange,
  initialValues: {  // Пробросится ниже в ReduxForm
    country_1:{
      id: "RF",
      title:"Российская Федерация"
    },
    country_2:{
      id: "USA",
      title:"Соединенные Штаты Америки"
    }

    /*country_1:"RF",
    country_2:"USA",
    sum_1:'1',
    sum_2:'1',*/
  }
})


export const ExchangeContainer = connect(
  mapStateToProps,
  { select, openTimeSelect },
)(reduxForm({
  form: 'ExchangeForm', // a unique identifier for this form
  onSubmit: values=>{console.log('submit', values)},
  validate
})(Exchange))

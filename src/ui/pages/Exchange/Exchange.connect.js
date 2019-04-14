import { connect } from 'react-redux'

//import { getNumberValue, getStatus } from '@store/signIn/selectors'
//import { changeNumber } from '@store/signIn/actions'
import { select, openTimeSelect, agreePress, updateSums, getSums } from '@store/exchange/thunks'
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
    },
    sum_1:1,
    sum_2:0,
    agree: false,
    delivery_time_from:'00:00',
    delivery_time_to:'00:00',



    /*country_1:"RF",
    country_2:"USA",
    sum_1:'1',
    sum_2:'1',*/
  }
})


export const ExchangeContainer = connect(
  mapStateToProps,
  { select, openTimeSelect, agreePress, updateSums, getSums },
)(reduxForm({
  form: 'ExchangeForm', // a unique identifier for this form
  onSubmit: values=>{console.log('submit', values)},
  validate
})(Exchange))

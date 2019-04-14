import { connect } from 'react-redux'

import { getCodeValue, getStatus } from '@store/confirm/selectors'
import { changeCode } from '@store/confirm/actions'
import { confirmNumber } from '@store/confirm/thunks'
import { reduxForm } from 'redux-form'
import { validate } from '../SignInConfirm/SignInConfirm.validate'
import { SignInConfirm } from '../SignInConfirm/SignInConfirm'



const mapStateToProps = state => ({
  //value: getPhoneValue(state),
  //status: getStatus(state),
  initialValues: {  // Пробросится ниже в ReduxForm
    code:""
  }
})

export const SignInConfirmContainer = connect(
  mapStateToProps,
  {  },
)(reduxForm({
  form: 'signInConfirmForm', // a unique identifier for this form
  onSubmit: values=>{console.log('values', values)},
  validate
})(SignInConfirm))
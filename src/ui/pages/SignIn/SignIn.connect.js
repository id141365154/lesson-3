import { connect } from 'react-redux'

import { getPhoneValue, getStatus } from '@store/signIn/selectors'
import { changeNumber } from '@store/signIn/actions'
import { signIn } from '@store/signIn/thunks'
import { SignIn } from './SignIn'
import { reduxForm } from 'redux-form'

import {validate} from './SignIn.validate'

const mapStateToProps = state => ({
  //value: getPhoneValue(state),
  //status: getStatus(state),
  initialValues: {  // Пробросится ниже в ReduxForm
    phone:""
  }
})

export const SignInContainer = connect(
  mapStateToProps,
  { changeNumber, signIn },
)(reduxForm({
  form: 'signInForm', // a unique identifier for this form
  onSubmit: values=>{console.log('values', values)},
  validate
})(SignIn))




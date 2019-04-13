import { connect } from 'react-redux'

//import { getNumberValue, getStatus } from '@store/signIn/selectors'
//import { changeNumber } from '@store/signIn/actions'
//import { signIn } from '@store/signIn/thunks'
import { SelectCountry } from './SelectCountry'

const mapStateToProps = state => ({
  value: '',
  status: '',
})

export const SelectCountryContainer = connect(
  mapStateToProps,
  //{ changeNumber, signIn },
)(SelectCountry)

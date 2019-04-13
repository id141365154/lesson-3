import { connect } from 'react-redux'

//import { getNumberValue, getStatus } from '@store/signIn/selectors'
//import { changeNumber } from '@store/signIn/actions'
//import { signIn } from '@store/signIn/thunks'

//import { selectCountry } from '@store/selectCountry/thunks'
import { setCountry } from '@store/exchange/thunks'

import { SelectCountry } from './SelectCountry'


const mapStateToProps = state => ({
  value: '',
  status: '',
})

export const SelectCountryContainer = connect(
  mapStateToProps,
  { setCountry },
)(SelectCountry)

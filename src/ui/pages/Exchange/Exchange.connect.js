import { connect } from 'react-redux'

//import { getNumberValue, getStatus } from '@store/signIn/selectors'
//import { changeNumber } from '@store/signIn/actions'
import { select } from '@store/exchange/thunks'
import { Exchange } from './Exchange'

const mapStateToProps = state => ({
  value: state.exchange,
})

export const ExchangeContainer = connect(
  mapStateToProps,
  { select },
)(Exchange)

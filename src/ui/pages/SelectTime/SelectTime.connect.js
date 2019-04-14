import { connect } from 'react-redux'

//import { changeNumber } from '@store/signIn/actions'
import { setTime, backToExchange, hoursChange, minutesChange } from '@store/exchange/thunks'
import { getTimeFrom, getTimeTo, getTimeToChange} from '@store/exchange/selectors'
import { SelectTime } from './SelectTime'


const mapStateToProps = state => ({
  hours: '',
  minutes: '',
  timeFrom: getTimeFrom(state),
  timeTo: getTimeTo(state),
  timeToChange: getTimeToChange(state)
})

export const SelectTimeContainer = connect(
  mapStateToProps,
  { SelectTime, backToExchange, setTime, hoursChange, minutesChange },
)(SelectTime)

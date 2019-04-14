import React from 'react'
import PropTypes from 'prop-types'
import { withTheme, styled, theme } from '@ui/theme'

import { Body2 } from '@ui/atoms/Typography'

import {
  Header,
  TextField,
  ButtonAccent,
  RequestStatus,
  ModalHeader,
  SearchInput,
  SearchStatus,
  RadioField,
} from '@ui/molecules'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'

const TimeList = styled.div`
  display:flex;
  flex-flow: row;
`

const TimeListCol = styled.div`
  height:90vh;
  overflow:auto;
  width:50%;
  padding:10px;
`

const TimeListColItem = styled.div`
  padding: 15px
  border-bottom:1px solid #eee;
  display:flex;
  padding:15px 30px 6px 30px;  
`


export const SelectTime = ({backToExchange, setTime, hoursChange, minutesChange, timeFrom, timeTo, timeToChange}) => {
    //console.log('timeFrom, timeTo',timeFrom, timeTo)
    //console.log('timeToChange',timeToChange)
    
  let currentTime = {}
  
  if (timeToChange =="time_to"){
    currentTime = timeTo
  }
  if (timeToChange =="time_from"){
    currentTime = timeFrom
  }

  console.log('currentTime',currentTime)

  let Hours = () => {
    let H = []
    for (let h = 0; h <= 23; h++) {
      H.push(h)
    }
    return H.map((h) => (
      <TimeListColItem key={h}>
        <RadioField
          labelText={h < 10 ? 0 + '' + h : h+''}
          value={h+''}
          name={'hours'}
          onChange={hoursChange}
          checked={h==currentTime.h}

        />
      </TimeListColItem>
    ))
  }

  let Minutes = () => {
    let M = []
    for (let m = 0; m <= 59; m++) {
      M.push(m)
    }
    return M.map((m) => (
      <TimeListColItem key={m}>
        <RadioField
          labelText={m < 10 ? 0 + '' + m : m+''}
          value={m+''}
          name={'minutes'}
          onChange={minutesChange}
          checked={m==currentTime.m}

        />
      </TimeListColItem>
    ))
  }

  return (
    <PageTemplate>
      <ModalHeader
        action={backToExchange}
        apply={setTime}

      >
        Выберите время
      </ModalHeader>
      <HBox/>

      <TimeList>
        <TimeListCol>
          <Hours/>
        </TimeListCol>
        <TimeListCol>
          <Minutes/>
        </TimeListCol>
      </TimeList>

    </PageTemplate>
  )
}


SelectTime.propTypes = {
  backToExchange: PropTypes.func,
  setTime:PropTypes.func,
  hoursChange:PropTypes.func,
  minutesChange:PropTypes.func,
  getTimeFrom: PropTypes.string,
  getTimeTo:PropTypes.string
}
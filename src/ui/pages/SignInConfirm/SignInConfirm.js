import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'

import { Field } from 'redux-form'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`


const CodeField = (props)=> {
  return(
    <TextField
      label="Код"
      placeholder="1234"
      error={props.meta.touched && props.meta.error ? props.meta.error : null}
      value={props.input.value}
      onChange={props.input.onChange}
      onFocus={props.input.onFocus}
      onBlur={props.input.onBlur}
    />
  )
}

export const SignInConfirm = ({ value, status, changeCode, confirmNumber, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <PageTemplate>
      <Header title="Введите код" />
      <Divider />
      <Flex1>
        <Wrapper>
          <HBox height={9} />
          <Body2>На указанный телефон выслан код подтверждения</Body2>
          <HBox height={20} />
          <Field name={'code'} type={'text'} component={CodeField} />
        </Wrapper>
        <RequestStatus
          status={status}
          loadingMessage="Код отправлется"
          failureMessage="Произошла неизвестная ошибка"
          successMessage="Код успешно отправлен"
        />
      </Flex1>
      <Wrapper>
        <ButtonAccent onPress={()=>{handleSubmit()}}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  </form>
)

SignInConfirm.propTypes = {
  //value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  changeCode: PropTypes.func.isRequired,
  confirmNumber: PropTypes.func.isRequired,
  handelSubmit: PropTypes.func
}

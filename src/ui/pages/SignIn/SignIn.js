import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'

import { Field } from 'redux-form'


const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

const PhoneInput = (props)=> {
  return (
    <TextField
      label="Номер телефона"
      startAdornment="+7"
      placeholder="9XXXXXXXXX"
      error={props.meta.touched && props.meta.error ? props.meta.error : null }
      value={props.input.value}
      onChange={props.input.onChange}
      onFocus={props.input.onFocus}
      onBlur={props.input.onBlur}
    />
  )
}

export const SignIn = ({ status, changeNumber, signIn, handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <PageTemplate>
      <Header title="Ввод номера телефона"/>
      <Divider/>
      <Flex1>
        <Wrapper>
          <HBox height={9}/>
          <Body2>На указанный телефон будет выслан код подтверждения</Body2>
          <HBox height={20}/>
          <Field name={'phone'} type={'text'} component={PhoneInput} />
        </Wrapper>
        <RequestStatus
          status={status}
          loadingMessage="Телефон отправлется"
          successMessage="Номер успешно отправлен"
          failureMessage="Произошла неизвестная ошибка"
        />
      </Flex1>
      <Wrapper>
        <ButtonAccent disabled={pristine || submitting} onPress={()=>{handleSubmit()}}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  </form>
)

SignIn.propTypes = {
  //value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  changeNumber: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func
}



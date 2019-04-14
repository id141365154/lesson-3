import React from 'react'

import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import {
  Header,
  ButtonAccent,
  SelectField,
  CheckboxWithText,
  TextField,
} from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'

import { Field, Fields } from 'redux-form'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`


const Country1 = (props) => {
  return (
    <SelectField
      label="Страна 1"
      value={props.input.value.id}
      publicValue={props.input.value.title}
      onPress={() => (props.select('country_1'))}


    />
  )
}

const Country2 = (props) => {
  return (
    <SelectField
      label="Страна 2"
      value={props.input.value.id}
      publicValue={props.input.value.title}
      onPress={() => (props.select('country_2'))}
      error={props.meta.touched && props.meta.error ? props.meta.error : null}
    />
  )
}

const Sum1 = (props) => {
  return (
    <TextField
      label="Российский рубль (RUB)"
      tip="Текст подсказки к полю"
      endAdornment="₽"
      error={props.meta.touched && props.meta.error ? props.meta.error : null}
      value={props.input.value}
      onChange={props.input.onChange}
      onFocus={props.input.onFocus}
      onBlur={props.input.onBlur}
    />
  )
}

const Sum2 = (props) => {
  return (
    <TextField
      label="Фунт стерлингов (GBP)"
      tip="Текст подсказки к полю"
      endAdornment="£"
      error={props.meta.touched && props.meta.error ? props.meta.error : null}
      value={props.input.value}
      onChange={props.input.onChange}
      onFocus={props.input.onFocus}
      onBlur={props.input.onBlur}
    />
  )
}


const _DeliveryTime = (props) => {
  return (
    <DeliveryTime
      fromValue={props.delivery_time_from.input.value}
      toValue={props.delivery_time_to.input.value}
      fromAction={() => (props.openTimeSelect('time_from'))}
      toAction={() => (props.openTimeSelect('time_to'))}
      tip="Выберите время доставки"
      inputsNames={{
        from: 'delivery_time_from',
        to: 'delivery_time_to',
      }}
    />
  )
}


const _CheckboxWithText = (props) => {
  return (
    <CheckboxWithText
      onPress={props.onPress}
      value={props.input.value}
      error={props.meta.touched && props.meta.error ? props.meta.error : null}
    >
      Со всеми условиями согласен, возможно вторая строка
    </CheckboxWithText>
  )
}

export const Exchange = ({ select, value, handleSubmit, openTimeSelect, agreePress, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <PageTemplate>
        <Header icon="back"/>
        <Flex1>
          <Wrapper>
            <Field
              component={Country1}
              name={'country_1'}
              type={'text'}
              select={select}
            />
            <Field
              component={Country2}
              name={'country_2'}
              type={'text'}
              select={select}

            />
            <Divider/>
            <HBox/>
            <Field
              component={Sum1}
              name={'sum_1'}
              type={'text'}
            />
            <HBox/>
            <Field
              component={Sum2}
              name={'sum_2'}
              type={'text'}
            />
            <HBox/>
            <Fields
              component={_DeliveryTime}
              openTimeSelect={openTimeSelect}
              names={['delivery_time_from', 'delivery_time_to']}
            />
            <HBox/>
            <Field
              component={_CheckboxWithText}
              name={'agree'}
              type={'checkbox'}
              onPress={agreePress}
            />
          </Wrapper>
        </Flex1>
        <Wrapper>
          <ButtonAccent disabled={pristine || submitting} onPress={() => (handleSubmit())}>Отправить</ButtonAccent>
        </Wrapper>
      </PageTemplate>
    </form>
  )
}
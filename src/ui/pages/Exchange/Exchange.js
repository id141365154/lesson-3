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

import { Field } from 'redux-form'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`



const Country1 = (props) =>{
  return (
    <SelectField
      label="Страна 1"
      value={props.obValue.country_1.id}
      publicValue={props.obValue.country_1.title}
      onPress={() => (props.select('country_1'))}
      input={props.input}
      onChange={props.input.onChange}
      onBlur={props.input.onBlur}

    />
  )
}

const Country2 = (props) =>{
  return (
    <SelectField
      label="Страна 2"
      value={props.obValue.country_2.id}
      publicValue={props.obValue.country_2.title}
      onPress={() => (props.select('country_2'))}
      input={props.input}
      onChange={props.input.onChange}
      onBlur={props.input.onBlur}

    />
  )
}

export const Exchange = ({ select, value, handleSubmit }) => {
  console.log('value', value)
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
              obValue={value}

            />
            <Field
              component={Country2}
              name={'country_2'}
              type={'text'}
              select={select}
              obValue={value}

            />
            <Divider/>
            <HBox/>
            <TextField
              label="Российский рубль (RUB)"
              onChange={() => undefined}
              tip="Текст подсказки к полю"
              value="100"
              endAdornment="₽"
            />
            <HBox/>
            <TextField
              label="Фунт стерлингов (GBP)"
              onChange={() => undefined}
              value="1"
              tip="Текст подсказки к полю"
              endAdornment="£"
            />
            <HBox/>
            <DeliveryTime
              fromValue="10:00"
              toValue="20:00"
              fromAction={() => undefined}
              toAction={() => undefined}
              tip="Выберите время доставки"
            />
            <HBox/>
            <CheckboxWithText onPress={() => undefined}>
              Со всеми условиями согласен, возможно вторая строка
            </CheckboxWithText>
          </Wrapper>
        </Flex1>
        <Wrapper>
          <ButtonAccent onPress={() =>(handleSubmit())}>Отправить</ButtonAccent>
        </Wrapper>
      </PageTemplate>
    </form>
  )
}
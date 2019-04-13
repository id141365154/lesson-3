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

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Exchange = ({select, value}) => {
  return (
    <PageTemplate>
      <Header icon="back" />
      <Flex1>
        <Wrapper>
          <SelectField
            label="Страна 1"
            value={value.country_1.id}
            publicValue={value.country_1.title}
            onPress={()=>(select('country_1'))}
          />
          <SelectField
            label="Страна 2"
            value={value.country_2.id}
            publicValue={value.country_2.title}
            onPress={()=>(select('country_2'))}
          />
          <Divider />
          <HBox />
          <TextField
            label="Российский рубль (RUB)"
            onChange={() => undefined}
            tip="Текст подсказки к полю"
            value="100"
            endAdornment="₽"
          />
          <HBox />
          <TextField
            label="Фунт стерлингов (GBP)"
            onChange={() => undefined}
            value="1"
            tip="Текст подсказки к полю"
            endAdornment="£"
          />
          <HBox />
          <DeliveryTime
            fromValue="10:00"
            toValue="20:00"
            fromAction={() => undefined}
            toAction={() => undefined}
            tip="Выберите время доставки"
          />
          <HBox />
          <CheckboxWithText onPress={() => undefined}>
            Со всеми условиями согласен, возможно вторая строка
          </CheckboxWithText>
        </Wrapper>
      </Flex1>
      <Wrapper>
        <ButtonAccent onPress={() => undefined}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
}
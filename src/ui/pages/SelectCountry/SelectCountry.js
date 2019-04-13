import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus, ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import {CountriesList} from '@ui/organisms'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'

export const SelectCountry = ({setCountry}) => {
  return (
    <PageTemplate>
      <ModalHeader action={console.log}>
        <SearchInput onChange={console.log} />
      </ModalHeader>
      <HBox />
      <CountriesList
        title={'История поиска'}
        list={[
          { title: 'Российская Федерация', id: 'RF' },
          { title: 'Соединенные Штаты Америки', id: 'USA' },
        ]}
        selectCountry={(val)=>(setCountry(val))}
      />
      <SearchStatus status="initial" />
    </PageTemplate>
  )
}

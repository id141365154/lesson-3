import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'

import  {SelectTime} from './SelectTime'

storiesOf('ui/pages', module).add('SelectTime', () => {
  return (
    <PageTemplate>
      <ModalHeader action={console.log}>
        Выберите время
      </ModalHeader>
      <SelectTime />
    </PageTemplate>
  )
})

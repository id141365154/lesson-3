import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { styled, withTheme } from '@ui/theme'
import { FieldContainer, HBox, IconExpand } from '@ui/atoms'
import { InputError, InputTip, Body1 } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment } from '@ui/molecules'

const SelectFieldContainer = styled.div`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.paddings.main}px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme }) =>
  error ? theme.pallete.errorColor : theme.pallete.darkWhite}
    solid;
`

const ValueContainer = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`

const HtmlInput = styled.input`
  position:absolute;
  opacity:0;
  left:-99999px;
`

export const SelectField = withTheme(
  ({ label, error, onPress, tip, value, theme, publicValue, onChange, onBlur }) => {
    /*const changeHandler = (e) => {
      onChange(e)
    }

    const blurHandler = (e) => {
      onBlur(e)
    }
*/

    const pressHandler = (e) => {
      onPress(e)
    }

    /*useEffect((effect) => { // Для того чтобы ReduxForm зафиксировал изменения значения
      let items = document.getElementsByClassName(HtmlInput.styledComponentId)
      for (let input of items) {
        input.focus()
        input.blur()
      }
    })*/

    return (
      <FieldContainer>
        <FormLabel>{label}</FormLabel>
        <HBox height={theme.paddings.half}/>
        <SelectFieldContainer error={error} onClick={pressHandler}>
          <ValueContainer>
            <Body1>{publicValue}</Body1>

          </ValueContainer>
          <FormAdornment>
            <IconExpand/>
          </FormAdornment>
        </SelectFieldContainer>
        <HBox height={theme.paddings.half}/>
        {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
      </FieldContainer>
    )
  },
)

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  publicValue: PropTypes.string,
  error: PropTypes.string,
  tip: PropTypes.string,
  onPress: PropTypes.func.isRequired,
/*  onChange: PropTypes.func,
  onBlur: PropTypes.func,*/
}

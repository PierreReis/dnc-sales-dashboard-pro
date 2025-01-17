import styled from 'styled-components'
import { InputProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledInput = styled.input<InputProps>`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  font-size: ${pxToRem(14)};
  height: ${pxToRem(40)};
  width: 100%;
  border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.borderColor};
  border-radius: ${pxToRem(8)};
  cursor: pointer;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  transition: background-color 0.3s;

  &:disabled {
    background-color: ${(props) => props.theme.textInput.disabled};
    color: ${(props) => props.theme.textInput.disabledColor};
    border: ${pxToRem(1)} solid
      ${(props) => props.theme.textInput.disabledBorderColor};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.textInput.placeholderColor};
  }
`

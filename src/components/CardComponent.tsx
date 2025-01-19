import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const CardComponent = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.border};
  border-radius: ${pxToRem(8)};
  box-sizing: border-box;
  padding: ${pxToRem(24)};
  width: 100%;
  &.alert {
    background-color: ${(props) => props.theme.card.alert};
    border-color: ${(props) => props.theme.card.alert};
  }
  &.sucess {
    background-color: ${(props) => props.theme.card.sucess};
    border-color: ${(props) => props.theme.card.sucess};
  }
  &.warning {
    background-color: ${(props) => props.theme.card.warning};
    border-color: ${(props) => props.theme.card.warning};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

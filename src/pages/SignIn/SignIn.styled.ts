import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '~/ui'

export const Container = styled.View`
  background: ${theme.colors.white};
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${getStatusBarHeight() + 40}px;
  left: 32px;
  z-index: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  color: ${theme.colors.neutral[900]};
  font-family: ${theme.font.archivo.semibold};
  margin-left: 32px;
  font-size: 38px;
  max-width: 180px;
  line-height: 43px;
  margin-top: 180px;
`

export const Description = styled.Text`
  margin-top: 24px;
  max-width: 204px;
  line-height: 25px;
  margin-left: 32px;
  color: ${theme.colors.neutral[700]};
  font-family: ${theme.font.inter.regular};
`

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 110px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  justify-content: space-between;
`

export const ForgotPassword = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``

export const ForgotPasswordText = styled.Text`
  font-family: ${theme.font.inter.regular};
  color: ${theme.colors.neutral[500]};
  font-size: 14px;
`

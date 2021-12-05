import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '~/ui'

export const Container = styled.View`
  background: ${theme.colors.white};
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 38}px;
  padding: 0 28px;
`

export const PageArea = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`

export const Title = styled(Animated.Text)`
  color: ${theme.colors.neutral[900]};
  font-family: ${theme.font.archivo.semibold};
  margin-left: 32px;
  font-size: 38px;
  max-width: 180px;
  line-height: 43px;
  margin-top: 80px;
`

export const Description = styled(Animated.Text)`
  margin-top: 8px;
  max-width: 153px;
  line-height: 25px;
  margin-left: 32px;
  color: ${theme.colors.neutral[700]};
  font-family: ${theme.font.inter.regular};
`

export const SubTitle = styled.Text`
  color: ${theme.colors.neutral[600]};
  font-family: ${theme.font.archivo.semibold};
  margin-left: 32px;
  line-height: 22px;
  font-size: 20px;
  margin-top: 116px;
`

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 24px;
`

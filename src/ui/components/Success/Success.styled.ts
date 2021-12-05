import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'

import { theme } from '~/ui'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background: ${theme.colors.neutral[900]};
  padding: ${getStatusBarHeight() + 70}px;
  align-items: center;
  flex: 1;
`

export const BgImage = styled.Image`
  width: ${Dimensions.get('window').width}px;
`

export const DoneArea = styled.View`
  width: 120px;
  height: 120px;
`

export const Title = styled(Animated.Text)`
  font-size: 30px;
  margin-bottom: 14px;
  line-height: 32.64px;
  color: ${theme.colors.white};
  font-family: ${theme.font.archivo.semibold};
`

export const Description = styled(Animated.Text)`
  text-align: center;
  margin-bottom: 80px;
  color: ${theme.colors.neutral[400]};
  font-family: ${theme.font.inter.regular};
  font-size: 15px;
  line-height: 25px;
`

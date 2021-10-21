import styled from 'styled-components/native'
import { FlatList, Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { theme } from '~/ui'

import { OnboardingItemProps } from '.'

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`

export const Container = styled(
  FlatList as new () => FlatList<OnboardingItemProps>,
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  bounces: false,
  scrollEventThrottle: 32,
})``

export const Content = styled.View`
  padding: 0 32px;
  justify-content: space-evenly;
`

export const StepArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const StepTitle = styled.Text`
  color: ${theme.colors.neutral[300]};
  font-family: ${theme.font.archivo.bold};
  font-size: 42px;
`

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${theme.font.archivo.bold};
  color: ${theme.colors.neutral[700]};
  max-width: 183px;
  line-height: 42px;
`

export const Description = styled.Text`
  margin-top: 24px;
  max-width: 200px;
  color: ${theme.colors.neutral[500]};
  font-family: ${theme.font.inter.regular};
`

export const ControlButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  margin: ${Platform.OS === 'ios' ? getBottomSpace() : 0}px auto;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.red[500]};
`

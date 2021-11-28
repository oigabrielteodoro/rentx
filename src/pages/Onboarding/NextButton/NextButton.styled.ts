import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/ui'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin: ${Platform.OS === 'ios' ? getBottomSpace() : 0}px auto;
`

export const Button = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  position: absolute;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.red[500]};
`

export const ButtonIcon = styled(Feather).attrs({
  color: theme.colors.white,
  size: 28,
  name: 'arrow-right',
})``

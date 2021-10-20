import { Platform, Animated } from 'react-native'
import styled, { css } from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { theme } from '~/ui'

type ControlBulletProps = {
  active?: boolean
}

export const Container = styled(Animated.View)`
  padding: 136px 32px ${Platform.OS === 'ios' ? getBottomSpace() : 0}px;
  justify-content: space-between;
  height: 100%;
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

export const ControlArea = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ControlBulletArea = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ControlBullet = styled.View<ControlBulletProps>`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${theme.colors.neutral[400]};

  ${({ active }) =>
    active &&
    css`
      background: ${theme.colors.neutral[700]};
    `}
`

export const ControlButton = styled.TouchableOpacity``

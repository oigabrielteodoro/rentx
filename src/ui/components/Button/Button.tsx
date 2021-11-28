import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './Button.styled'

type Props = {
  children: string
  variant?: 'primary' | 'secondary'
} & TouchableOpacityProps

export function Button({ children, variant = 'primary', ...rest }: Props) {
  return (
    <S.Button variant={variant} {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  )
}

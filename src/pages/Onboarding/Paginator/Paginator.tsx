import React from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import { theme } from '~/ui'

import * as S from './Paginator.styled'

type Props = {
  scrollX: Animated.Value
}

export function Paginator({ scrollX }: Props) {
  const { width } = useWindowDimensions()

  return (
    <S.Container>
      {[1, 2].map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })

        const color = scrollX.interpolate({
          inputRange,
          outputRange: [
            theme.colors.neutral[500],
            theme.colors.red[500],
            theme.colors.neutral[500],
          ],
          extrapolate: 'clamp',
        })

        return (
          <S.Dot
            key={index.toString()}
            style={{ width: dotWidth, opacity, backgroundColor: color }}
          />
        )
      })}
    </S.Container>
  )
}

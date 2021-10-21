import React, { useRef, useCallback, useEffect } from 'react'
import { Animated, View, TouchableOpacityProps } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'

import { theme } from '~/ui'

import * as S from './NextButton.styled'

type Props = {
  percentage: number
} & Pick<TouchableOpacityProps, 'onPress'>

const size = 128
const strokeWidth = 2
const center = size / 2
const radius = size / 2 - strokeWidth / 2
const circumference = 2 * Math.PI * radius

export function NextButton({ percentage, onPress }: Props) {
  const progressRef = useRef<View>(null)
  const progressAnimation = useRef(new Animated.Value(0)).current

  const animation = useCallback(
    (toValue: number) => {
      return Animated.timing(progressAnimation, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }).start()
    },
    [progressAnimation],
  )

  useEffect(() => {
    animation(percentage)
  }, [animation, percentage])

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        })
      }
    })

    return () => {
      progressAnimation.removeAllListeners()
    }
  }, [progressAnimation])

  return (
    <S.Container>
      <Svg width={size} height={size}>
        <G rotation='-90' origin={center}>
          <Circle
            stroke={theme.colors.neutral[300]}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />

          <Circle
            ref={progressRef}
            stroke={theme.colors.red[500]}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <S.Button onPress={onPress} activeOpacity={0.6}>
        <S.ButtonIcon />
      </S.Button>
    </S.Container>
  )
}

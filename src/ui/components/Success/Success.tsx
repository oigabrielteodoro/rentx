import React, { useRef, useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { StatusBar, Animated } from 'react-native'

import { SUCCESS } from '~/assets'

import { Button } from '~/ui'

import * as S from './Success.styled'

type Props = {
  title: string
  description: string
  onPress: () => void
}

export function Success({ title, description, onPress }: Props) {
  const titleOpacity = useRef(new Animated.Value(0)).current
  const descriptionOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(titleOpacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
      delay: 300,
    }).start()

    Animated.timing(descriptionOpacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 600,
      delay: 300,
    }).start()
  }, [titleOpacity, descriptionOpacity])

  return (
    <>
      <StatusBar barStyle='light-content' />

      <S.Container>
        <S.BgImage source={SUCCESS} />

        <S.DoneArea>
          <LottieView
            autoPlay
            loop={false}
            source={require('../../../lotties/done.json')}
          />
        </S.DoneArea>

        <S.Title style={{ opacity: titleOpacity }}>{title}</S.Title>
        <S.Description style={{ opacity: descriptionOpacity }}>
          {description}
        </S.Description>
        <Button
          variant='secondary'
          style={{ maxHeight: 58, minWidth: 80 }}
          onPress={onPress}
        >
          Ok
        </Button>
      </S.Container>
    </>
  )
}

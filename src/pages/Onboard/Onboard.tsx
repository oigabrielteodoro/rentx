import React from 'react'
import { Image, View, SafeAreaView } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { theme } from '~/ui'
import { SCHEDULE_ICON } from '~/assets'

import * as S from './Onboard.styled'
import { useOnboard } from './useOnboard'

const content = {
  image: [SCHEDULE_ICON, SCHEDULE_ICON],
  title: ['Primeiro, escolha a data', 'Depois, escolha o carro'],
  description: [
    'Você é quem define um período, e nós mostraremos os carros disponíveis.',
    'Vários modelos para você dirigir seguro, com conforto e segurança.',
  ],
}

export function Onboard() {
  const { index, animationOpacity, animationTransformX, next } = useOnboard()

  return (
    <SafeAreaView>
      <S.Container
        style={{
          opacity: animationOpacity,
          transform: [{ translateX: animationTransformX }],
        }}
      >
        <S.StepArea>
          <Image source={content.image[index]} />
          <S.StepTitle>0{index + 1}</S.StepTitle>
        </S.StepArea>
        <View>
          <S.Title>{content.title[index]}</S.Title>
          <S.Description>{content.description[index]}</S.Description>
        </View>
        <S.ControlArea>
          <S.ControlBulletArea>
            <S.ControlBullet active={index === 0} />
            <S.ControlBullet active={index === 1} style={{ marginLeft: 8 }} />
          </S.ControlBulletArea>
          <S.ControlButton>
            <Entypo
              size={20}
              name='chevron-right'
              color={theme.colors.neutral[400]}
              onPress={next}
            />
          </S.ControlButton>
        </S.ControlArea>
      </S.Container>
    </SafeAreaView>
  )
}

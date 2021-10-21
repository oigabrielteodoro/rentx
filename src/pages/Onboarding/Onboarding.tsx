import React from 'react'
import { Image, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/ui'
import { SCHEDULE_ICON } from '~/assets'

import * as S from './Onboarding.styled'
import { OnboardingItemProps } from './Onboarding.typed'

import { Paginator } from './Paginator'
import { useOnboarding } from './useOnboarding'

export function Onboarding() {
  const { ref, scrollX, viewConfig, fullSizeWidth, changeIndex, scrollEvent } =
    useOnboarding()

  return (
    <S.SafeAreaView>
      <S.Container
        ref={ref}
        data={onboarding}
        viewabilityConfig={viewConfig}
        keyExtractor={(item) => item.title}
        onViewableItemsChanged={changeIndex}
        onScroll={scrollEvent()}
        renderItem={({ item, index }) => (
          <S.Content style={{ width: fullSizeWidth }}>
            <S.StepArea>
              <Image source={item.image} />
              <S.StepTitle>0{index + 1}</S.StepTitle>
            </S.StepArea>
            <View>
              <S.Title>{item.title}</S.Title>
              <S.Description>{item.description}</S.Description>
            </View>
          </S.Content>
        )}
      />
      <Paginator scrollX={scrollX} />
      <S.ControlButton>
        <Feather size={24} name='arrow-right' color={theme.colors.white} />
      </S.ControlButton>
    </S.SafeAreaView>
  )
}

const onboarding: OnboardingItemProps[] = [
  {
    image: SCHEDULE_ICON,
    title: 'Primeiro, escolha a data',
    description:
      'Você é quem define um período, e nós mostraremos os carros disponíveis.',
  },
  {
    image: SCHEDULE_ICON,
    title: 'Depois, escolha o carro',
    description:
      'Vários modelos para você dirigir seguro, com conforto e segurança.',
  },
]

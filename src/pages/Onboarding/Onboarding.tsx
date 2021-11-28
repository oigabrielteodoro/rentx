import React from 'react'
import { Image, View } from 'react-native'

import { CAR_ICON, SCHEDULE_ICON } from '~/assets'

import * as S from './Onboarding.styled'
import { OnboardingItemProps } from './Onboarding.typed'

import { Paginator } from './Paginator'
import { NextButton } from './NextButton'
import { useOnboarding } from './useOnboarding'

export function Onboarding() {
  const {
    ref,
    scrollX,
    index,
    viewConfig,
    fullSizeWidth,
    scrollTo,
    changeIndex,
    scrollEvent,
  } = useOnboarding()

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
      <NextButton
        percentage={(index + 1) * (100 / onboarding.length)}
        onPress={scrollTo}
      />
    </S.SafeAreaView>
  )
}

export const onboarding: OnboardingItemProps[] = [
  {
    image: SCHEDULE_ICON,
    title: 'Primeiro, escolha a data',
    description:
      'Você é quem define um período, e nós mostraremos os carros disponíveis.',
  },
  {
    image: CAR_ICON,
    title: 'Depois, escolha o carro',
    description:
      'Vários modelos para você dirigir seguro, com conforto e segurança.',
  },
]

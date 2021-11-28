import React from 'react'
import { StatusBar } from 'react-native'

import { LOGO } from '~/assets'

import * as S from './Welcome.styled'

export function Welcome() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <S.Container>
        <S.Logo source={LOGO} />
        <S.Title>Seja Bem-vindo</S.Title>
        <S.Description>O que você deseja fazer?</S.Description>
        <S.BackButton>
          <S.BackButtonText>Voltar</S.BackButtonText>
        </S.BackButton>
      </S.Container>
    </>
  )
}

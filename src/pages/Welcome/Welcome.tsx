import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { LOGO } from '~/assets'
import { Button } from '~/ui'
import { SIGN_IN, SIGN_UP } from '~/routes'
import { NavigatorProps } from '~/Navigation'

import * as S from './Welcome.styled'

type UseNavigationProp = NativeStackNavigationProp<NavigatorProps, 'SignIn'>

export function Welcome() {
  const { navigate, goBack } = useNavigation<UseNavigationProp>()

  return (
    <>
      <StatusBar barStyle='light-content' />
      <S.Container>
        <S.Content>
          <S.Logo source={LOGO} />
          <S.Title>Seja</S.Title>
          <S.Title>Bem-vindo</S.Title>
          <S.Description>O que você deseja fazer?</S.Description>
          <S.Row>
            <Button onPress={() => navigate(SIGN_IN)}>Entrar</Button>
            <Button
              variant='secondary'
              style={{ marginLeft: 16 }}
              onPress={() => navigate(SIGN_UP)}
            >
              Cadastro
            </Button>
          </S.Row>
          <S.BackButton onPress={goBack}>
            <S.BackButtonText>Voltar</S.BackButtonText>
          </S.BackButton>
        </S.Content>
      </S.Container>
    </>
  )
}

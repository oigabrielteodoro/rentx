import React from 'react'
import { StatusBar } from 'react-native'

import { LOGO } from '~/assets'
import { Button } from '~/ui'

import * as S from './Welcome.styled'

export function Welcome() {
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
            <Button>Login</Button>
            <Button variant='secondary' style={{ marginLeft: 16 }}>
              Cadastro
            </Button>
          </S.Row>
          <S.BackButton>
            <S.BackButtonText>Voltar</S.BackButtonText>
          </S.BackButton>
        </S.Content>
      </S.Container>
    </>
  )
}

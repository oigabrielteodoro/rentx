import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Input } from '~/ui'

import * as S from './SignUp.styled'

export function SignUp() {
  return (
    <S.Container>
      <S.Title>Crie sua conta</S.Title>
      <S.Description>Faça seu cadastro de forma fácil e simples.</S.Description>
      <KeyboardAwareScrollView>
        <S.SubTitle>01. Dados</S.SubTitle>

        <S.Form>
          <Input placeholder='Nome' icon='card-account-details-outline' />

          <Input
            placeholder='E-mail'
            icon='email-outline'
            style={{ marginTop: 8 }}
          />

          <Button style={{ marginTop: 32 }}>Próximo</Button>
        </S.Form>
      </KeyboardAwareScrollView>
    </S.Container>
  )
}

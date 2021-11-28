import React, { useState, useRef } from 'react'
import { StatusBar, Platform, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Button, Input, theme } from '~/ui'

import * as S from './SignIn.styled'

type InputRef = {
  focus: () => void
}

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef<InputRef>(null)
  const passwordRef = useRef<InputRef>(null)

  function handleSubmit() {}

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <S.Container
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <S.BackButton>
            <Feather
              size={20}
              name='chevron-left'
              color={theme.colors.neutral[400]}
            />
          </S.BackButton>

          <S.Title>Estamos quase lá.</S.Title>

          <S.Description>
            Faça seu login para começar uma experiência incrível.
          </S.Description>

          <S.Form>
            <Input
              ref={emailRef}
              placeholder='E-mail'
              icon='email-outline'
              onChangeText={setEmail}
              value={email}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              returnKeyType='next'
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <Input
              ref={passwordRef}
              secureTextEntry
              placeholder='Senha'
              icon='lock-outline'
              style={{ marginTop: 8 }}
              onChangeText={setPassword}
              value={password}
              returnKeyType='send'
              onSubmitEditing={handleSubmit}
            />

            <Button style={{ marginTop: 32 }} onPress={handleSubmit}>
              Entrar
            </Button>
          </S.Form>
        </ScrollView>
      </S.Container>
    </>
  )
}

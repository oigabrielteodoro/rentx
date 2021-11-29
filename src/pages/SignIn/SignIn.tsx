import React, { useState, useRef } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Feather } from '@expo/vector-icons'

import { Button, CheckBox, Input, theme } from '~/ui'

import * as S from './SignIn.styled'

type InputRef = {
  focus: () => void
}

export function SignIn() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef<InputRef>(null)
  const passwordRef = useRef<InputRef>(null)

  function handleSubmit() {}

  return (
    <>
      <StatusBar barStyle='dark-content' />

      <S.BackButton onPress={navigation.goBack}>
        <Feather
          size={20}
          name='chevron-left'
          color={theme.colors.neutral[400]}
        />
      </S.BackButton>

      <KeyboardAvoidingView enabled behavior='padding' style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <S.Container>
            <View>
              <S.Title>Estamos quase lá.</S.Title>
            </View>

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

              <S.Row>
                <CheckBox label='Lembrar-me' />

                <S.ForgotPassword>
                  <S.ForgotPasswordText>
                    Esqueci minha senha
                  </S.ForgotPasswordText>
                </S.ForgotPassword>
              </S.Row>

              <Button style={{ marginTop: 32 }} onPress={handleSubmit}>
                Entrar
              </Button>
            </S.Form>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

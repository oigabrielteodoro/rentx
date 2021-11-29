import React, { useState, useRef } from 'react'
import { StatusBar, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, CheckBox, Input } from '~/ui'
import { NavigatorProps } from '~/Navigation'

import * as S from './SignIn.styled'

type InputRef = {
  focus: () => void
}

type UseNavigationProp = NativeStackNavigationProp<NavigatorProps, 'Welcome'>

export function SignIn() {
  const navigation = useNavigation<UseNavigationProp>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const emailRef = useRef<InputRef>(null)
  const passwordRef = useRef<InputRef>(null)

  function handleSubmit() {
    if (!email) {
      emailRef.current?.focus()
      return setErrors(() => ({
        email: 'E-mail obrigatório',
        password: '',
      }))
    }

    if (!password) {
      passwordRef.current?.focus()
      return setErrors(() => ({
        email: '',
        password: 'Senha obrigatória',
      }))
    }

    navigation.navigate('Home')
  }

  return (
    <S.Container>
      <StatusBar barStyle='dark-content' />

      <KeyboardAwareScrollView>
        <View>
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
              errorMessage={errors?.email}
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
              errorMessage={errors?.password}
            />

            <S.Row>
              <CheckBox label='Lembrar-me' />

              <S.ForgotPassword>
                <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
              </S.ForgotPassword>
            </S.Row>

            <Button style={{ marginTop: 32 }} onPress={handleSubmit}>
              Entrar
            </Button>
          </S.Form>
        </View>
      </KeyboardAwareScrollView>

      <S.SeparatorArea>
        <S.Separator />
        <S.SeparatorText>OU</S.SeparatorText>
        <S.Separator />
      </S.SeparatorArea>

      <S.BackButton onPress={navigation.goBack}>
        <S.BackButtonText>Voltar para início</S.BackButtonText>
      </S.BackButton>
    </S.Container>
  )
}

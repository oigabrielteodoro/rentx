import React from 'react'
import { Animated, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, CheckBox, Input } from '~/ui'

import { useSignIn } from './useSignIn'

import * as S from './SignIn.styled'

export function SignIn() {
  const {
    errors,
    email,
    password,
    emailRef,
    passwordRef,
    translateY,
    keyboardWillShowAnimation,
    keyboardWillHideAnimation,
    setEmail,
    setPassword,
    handleSubmit,
    goBack,
  } = useSignIn()

  return (
    <S.Container>
      <StatusBar barStyle='dark-content' />

      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        onKeyboardWillHide={() => keyboardWillHideAnimation.start()}
        onKeyboardWillShow={() => keyboardWillShowAnimation.start()}
      >
        <Animated.View style={{ transform: [{ translateY }] }}>
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
        </Animated.View>
      </KeyboardAwareScrollView>

      <S.SeparatorArea>
        <S.Separator />
        <S.SeparatorText>OU</S.SeparatorText>
        <S.Separator />
      </S.SeparatorArea>

      <S.BackButton onPress={goBack}>
        <S.BackButtonText>Voltar para início</S.BackButtonText>
      </S.BackButton>
    </S.Container>
  )
}

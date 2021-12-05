import React from 'react'
import { Animated, StatusBar } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { match } from 'ts-pattern'

import { BackButton } from '~/ui'

import { User } from './User'
import { Password } from './Password'

import { useAnimations } from './useAnimations'

import * as S from './SignUp.styled'
import { SignUpProvider, useSignUp } from './SignUpContext'

function SignUpScreen() {
  const {
    formY,
    pageOpacity,
    descriptionY,
    titleOpacity,
    onKeyboardWillHide,
    onKeyboardWillShow,
  } = useAnimations()

  const { actualStage, colorToDot } = useSignUp()

  return (
    <S.Container>
      <StatusBar barStyle='dark-content' />
      <S.Header>
        <BackButton />

        <S.PageArea style={{ opacity: pageOpacity }}>
          <Octicons size={10} name='primitive-dot' color={colorToDot('user')} />
          <Octicons
            size={10}
            name='primitive-dot'
            style={{ marginLeft: 8 }}
            color={colorToDot('password')}
          />
        </S.PageArea>
      </S.Header>
      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        onKeyboardWillHide={onKeyboardWillHide}
        onKeyboardWillShow={onKeyboardWillShow}
      >
        <S.Title style={{ opacity: titleOpacity }}>Crie sua conta</S.Title>
        <S.Description style={{ transform: [{ translateY: descriptionY }] }}>
          Faça seu cadastro de forma fácil e simples.
        </S.Description>

        <Animated.View style={{ transform: [{ translateY: formY }] }}>
          {match(actualStage)
            .with('user', () => <User />)
            .with('password', () => <Password />)
            .run()}
        </Animated.View>
      </KeyboardAwareScrollView>
    </S.Container>
  )
}

export function SignUp() {
  return (
    <SignUpProvider>
      <SignUpScreen />
    </SignUpProvider>
  )
}

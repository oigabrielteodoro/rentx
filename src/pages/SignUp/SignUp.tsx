import React from 'react'
import { Octicons } from '@expo/vector-icons'
import { Animated, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { match } from 'ts-pattern'

import { BackButton, Success } from '~/ui'
import { NavigatorProps } from '~/Navigation'

import { User } from './User'
import { Password } from './Password'
import { SignUpProvider, useSignUp } from './SignUpContext'

import { useAnimations } from './useAnimations'

import * as S from './SignUp.styled'

type UseNavigationProp = NativeStackNavigationProp<NavigatorProps, 'Home'>

function SignUpScreen() {
  const {
    formY,
    formX,
    pageOpacity,
    formOpacity,
    descriptionY,
    titleOpacity,
    onKeyboardWillHide,
    onKeyboardWillShow,
  } = useAnimations()

  const { goBack, navigate } = useNavigation<UseNavigationProp>()

  const {
    actualStage,
    isSuccess,
    colorToDot,
    handleOnChangeStage,
    handleMoveToLeft,
  } = useSignUp()

  function handleOnBack() {
    if (actualStage === 'user') {
      return goBack()
    }

    handleMoveToLeft()
    handleOnChangeStage('user')
  }

  if (isSuccess) {
    return (
      <Success
        title='Conta criada!'
        description='Agora é só fazer login e aproveitar.'
        onPress={() => navigate('Home')}
      />
    )
  }

  return (
    <S.Container>
      <StatusBar barStyle='dark-content' />
      <S.Header>
        <BackButton onPress={handleOnBack} />

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

        <Animated.View
          style={{
            transform: [{ translateY: formY }, { translateX: formX }],
            opacity: formOpacity,
          }}
        >
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

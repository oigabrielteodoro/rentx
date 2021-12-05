import { useState, useRef } from 'react'
import { Animated } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NavigatorProps } from '~/Navigation'

type InputRef = {
  focus: () => void
}

type UseNavigationProp = NativeStackNavigationProp<NavigatorProps, 'Home'>

export function useSignIn() {
  const navigation = useNavigation<UseNavigationProp>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const emailRef = useRef<InputRef>(null)
  const passwordRef = useRef<InputRef>(null)
  const translateY = useRef(new Animated.Value(0)).current

  const keyboardWillShowAnimation = Animated.spring(translateY, {
    toValue: -125,
    useNativeDriver: true,
  })

  const keyboardWillHideAnimation = Animated.spring(translateY, {
    toValue: 0,
    useNativeDriver: true,
  })

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

  return {
    errors,
    email,
    password,
    emailRef,
    passwordRef,
    translateY,
    keyboardWillHideAnimation,
    keyboardWillShowAnimation,
    setEmail,
    setPassword,
    handleSubmit,
    goBack: navigation.goBack,
  }
}

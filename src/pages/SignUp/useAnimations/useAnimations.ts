import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

import { useSignUp } from '../SignUpContext'

export function useAnimations() {
  const formY = useRef(new Animated.Value(0)).current
  const formX = useRef(new Animated.Value(0)).current
  const formOpacity = useRef(new Animated.Value(1)).current
  const pageOpacity = useRef(new Animated.Value(0)).current
  const titleOpacity = useRef(new Animated.Value(1)).current
  const descriptionY = useRef(new Animated.Value(0)).current

  const { direction, handleOnChangeStage } = useSignUp()

  useEffect(() => {
    if (direction) {
      Animated.timing(formOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
      }).start(({ finished }) => {
        if (finished) {
          handleOnChangeStage(direction)
        }

        Animated.timing(formOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: 300,
        }).start()
      })
    }
  }, [direction, formX, formOpacity, handleOnChangeStage])

  function onKeyboardWillHide() {
    Animated.spring(descriptionY, {
      toValue: 0,
      useNativeDriver: true,
    }).start()

    Animated.spring(formY, {
      toValue: 0,
      useNativeDriver: true,
    }).start()

    Animated.timing(titleOpacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start()

    Animated.timing(pageOpacity, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  function onKeyboardWillShow() {
    Animated.timing(titleOpacity, {
      toValue: 0,
      useNativeDriver: true,
      duration: 150,
    }).start()

    Animated.timing(pageOpacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start()

    Animated.spring(descriptionY, {
      toValue: -130,
      useNativeDriver: true,
    }).start()

    Animated.spring(formY, {
      toValue: -205,
      useNativeDriver: true,
    }).start()
  }

  return {
    formY,
    formX,
    pageOpacity,
    formOpacity,
    descriptionY,
    titleOpacity,
    onKeyboardWillHide,
    onKeyboardWillShow,
  }
}

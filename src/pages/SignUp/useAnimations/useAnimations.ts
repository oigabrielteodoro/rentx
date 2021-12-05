import { useRef } from 'react'
import { Animated } from 'react-native'

export function useAnimations() {
  const formY = useRef(new Animated.Value(0)).current
  const pageOpacity = useRef(new Animated.Value(0)).current
  const titleOpacity = useRef(new Animated.Value(1)).current
  const descriptionY = useRef(new Animated.Value(0)).current

  function onKeyboardWillHide() {
    Animated.spring(descriptionY, {
      toValue: 0,
      useNativeDriver: true,
    }).start()

    Animated.spring(formY, {
      toValue: 0,
      useNativeDriver: true,
    }).start()

    Animated.spring(titleOpacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start()

    Animated.spring(pageOpacity, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  function onKeyboardWillShow() {
    Animated.spring(titleOpacity, {
      toValue: 0,
      useNativeDriver: true,
    }).start()

    Animated.spring(pageOpacity, {
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
    pageOpacity,
    descriptionY,
    titleOpacity,
    onKeyboardWillHide,
    onKeyboardWillShow,
  }
}

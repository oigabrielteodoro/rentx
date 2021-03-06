import { useRef } from 'react'
import { Animated } from 'react-native'

export function useKeyboardAnimation(toValue: number) {
  const translateY = useRef(new Animated.Value(0)).current

  const willShowKeyboard = Animated.spring(translateY, {
    toValue,
    useNativeDriver: true,
  })

  const willHideKeyboard = Animated.spring(translateY, {
    toValue: 0,
    useNativeDriver: true,
  })

  return {
    translateY,
    willShowKeyboard,
    willHideKeyboard,
  }
}

import { useRef, useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
import { Animated, useWindowDimensions } from 'react-native'

export function useOnboard() {
  const [index, setIndex] = useState(0)
  const animationOpacity = useRef(new Animated.Value(1)).current
  const animationTransformX = useRef(new Animated.Value(0)).current

  // const navigation = useNavigation()
  const { width } = useWindowDimensions()

  function next() {
    if (index < 1) {
      setIndex((prevState) => prevState + 1)
    } else {
      Animated.timing(animationOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start()

      Animated.timing(animationTransformX, {
        toValue: width,
        duration: 1000,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          // navigation.navigate('Welcome')
        }
      })
    }
  }

  return {
    index,
    animationOpacity,
    animationTransformX,
    next,
  }
}

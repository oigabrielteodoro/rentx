import { useCallback, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {
  Animated,
  FlatList,
  useWindowDimensions,
  ViewToken,
} from 'react-native'

import { WELCOME } from '~/routes'
import { NavigatorProps } from '~/Navigation'

import { OnboardingItemProps } from '..'

const SIZE = 2

type UseNavigationProp = NativeStackNavigationProp<NavigatorProps, 'Welcome'>

export function useOnboarding() {
  const [index, setIndex] = useState(0)

  const navigation = useNavigation<UseNavigationProp>()
  const { width } = useWindowDimensions()

  const ref = useRef<FlatList<OnboardingItemProps>>(null)
  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setIndex(viewableItems[0]?.index ?? 0)
    },
  ).current

  const scrollEvent = useCallback(
    () =>
      Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: false,
      }),
    [scrollX],
  )

  const scrollTo = useCallback(() => {
    if (index < SIZE - 1) {
      ref.current?.scrollToIndex({ index: index + 1 })
    } else {
      navigation.navigate(WELCOME)
    }
  }, [index, navigation])

  return {
    ref,
    index,
    scrollX,
    viewConfig,
    fullSizeWidth: width,
    scrollTo,
    scrollEvent,
    changeIndex: viewableItemsChanged,
  }
}

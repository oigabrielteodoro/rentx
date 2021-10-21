import { useCallback, useRef, useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
import {
  Animated,
  FlatList,
  useWindowDimensions,
  ViewToken,
} from 'react-native'
import { OnboardingItemProps } from '../Onboarding.typed'

export function useOnboarding() {
  const [index, setIndex] = useState(0)

  const ref = useRef<FlatList<OnboardingItemProps>>(null)
  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index) {
        setIndex(viewableItems[0].index)
      }
    },
  ).current

  const { width } = useWindowDimensions()

  const scrollEvent = useCallback(
    () =>
      Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: false,
      }),
    [scrollX],
  )

  // const navigation = useNavigation()

  return {
    ref,
    index,
    scrollX,
    viewConfig,
    fullSizeWidth: width,
    scrollEvent,
    changeIndex: viewableItemsChanged,
  }
}

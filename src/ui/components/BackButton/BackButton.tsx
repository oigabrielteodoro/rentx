import React, { useCallback } from 'react'
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/ui'
import { useNavigation } from '@react-navigation/core'

export function BackButton({ onPress, ...rest }: TouchableOpacityProps) {
  const { canGoBack, goBack } = useNavigation()

  const handleOnPress = useCallback(
    (event: GestureResponderEvent) => {
      if (canGoBack() && !onPress) {
        goBack()
      }

      onPress?.(event)
    },
    [canGoBack, goBack, onPress],
  )

  return (
    <TouchableOpacity onPress={handleOnPress} {...rest}>
      <Feather
        name='chevron-left'
        color={theme.colors.neutral[400]}
        size={24}
      />
    </TouchableOpacity>
  )
}

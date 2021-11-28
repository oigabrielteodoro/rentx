import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'
import { TextInputProps, TextInput } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { theme } from '~/ui'

import * as S from './Input.styled'

type Props = {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
} & Omit<TextInputProps, 'ref' | 'selectionState'>

type InputRef = {
  focus: () => void
}

const InputElement: ForwardRefRenderFunction<InputRef, Props> = (
  { icon, style, secureTextEntry = false, ...rest },
  ref,
) => {
  const inputRef = useRef(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isVisible, setIsVisible] = useState(secureTextEntry)

  useImperativeHandle(ref, () => ({
    focus() {
      if (inputRef.current) {
        const current: TextInput = inputRef.current
        current.focus()
      }
    },
  }))

  function handleClickIcon() {
    if (inputRef.current) {
      const current: TextInput = inputRef.current

      current.focus()

      setIsFocused(true)
    }
  }

  return (
    <S.Container style={style}>
      <S.IconArea onPress={handleClickIcon} activeOpacity={0.9}>
        {icon && (
          <MaterialCommunityIcons
            size={24}
            name={icon}
            color={theme.colors[isFocused ? 'red' : 'neutral'][500]}
          />
        )}
      </S.IconArea>
      <S.TextInput
        ref={inputRef}
        secureTextEntry={isVisible}
        placeholderTextColor={theme.colors.neutral[500]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {secureTextEntry && (
        <S.SecureIcon>
          <Feather
            size={18}
            color={theme.colors.neutral[500]}
            name={isVisible ? 'eye-off' : 'eye'}
            onPress={() => setIsVisible((prevState) => !prevState)}
          />
        </S.SecureIcon>
      )}
    </S.Container>
  )
}

export const Input = forwardRef(InputElement)

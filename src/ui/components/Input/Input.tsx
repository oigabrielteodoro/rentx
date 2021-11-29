/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'
import { TextInputProps } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { theme } from '~/ui'

import * as S from './Input.styled'

type Props = {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
  errorMessage?: string
} & Omit<TextInputProps, 'ref' | 'selectionState'>

type InputRef = {
  focus: () => void
}

const InputElement: ForwardRefRenderFunction<InputRef, Props> = (
  { icon, style, secureTextEntry = false, errorMessage, ...rest },
  ref,
) => {
  const inputRef = useRef<any>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isVisible, setIsVisible] = useState(secureTextEntry)

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus()
    },
  }))

  function handleClickIcon() {
    inputRef.current?.focus()

    setIsFocused(true)
  }

  return (
    <>
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
      {!!errorMessage && (
        <S.Error>
          <Feather
            size={16}
            name='alert-circle'
            color={theme.colors.red[500]}
          />
          <S.ErrorText>{errorMessage}</S.ErrorText>
        </S.Error>
      )}
    </>
  )
}

export const Input = forwardRef(InputElement)

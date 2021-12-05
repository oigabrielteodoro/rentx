import React, { useRef, useCallback } from 'react'

import { Input, Button } from '~/ui'

import * as S from '../SignUp.styled'

type InputRef = {
  focus: () => void
}

export function Password() {
  const passwordRef = useRef<InputRef>(null)
  const confirmPasswordRef = useRef<InputRef>(null)

  const handleOnSubmit = useCallback(() => {}, [])

  return (
    <>
      <S.SubTitle>02. Senha</S.SubTitle>
      <S.Form>
        <Input
          ref={passwordRef}
          placeholder='Senha'
          icon='lock-outline'
          returnKeyType='next'
          keyboardType='visible-password'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry
        />

        <Input
          ref={confirmPasswordRef}
          placeholder='Confirmar senha'
          icon='lock-outline'
          returnKeyType='send'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='visible-password'
          secureTextEntry
          style={{ marginTop: 8 }}
        />

        <Button onPress={handleOnSubmit} style={{ marginTop: 32 }}>
          Cadastrar
        </Button>
      </S.Form>
    </>
  )
}

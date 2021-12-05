import React, { useRef, useCallback } from 'react'

import { Input, Button } from '~/ui'

import * as S from '../SignUp.styled'

type InputRef = {
  focus: () => void
}

export function User() {
  const emailRef = useRef<InputRef>(null)

  const handleOnSubmit = useCallback(() => {}, [])

  return (
    <>
      <S.SubTitle>01. Dados</S.SubTitle>

      <S.Form>
        <Input
          placeholder='Nome'
          icon='card-account-details-outline'
          returnKeyType='next'
          onSubmitEditing={() => emailRef.current?.focus()}
        />

        <Input
          ref={emailRef}
          placeholder='E-mail'
          icon='email-outline'
          returnKeyType='send'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          onSubmitEditing={handleOnSubmit}
          style={{ marginTop: 8 }}
        />

        <Button onPress={handleOnSubmit} style={{ marginTop: 32 }}>
          Próximo
        </Button>
      </S.Form>
    </>
  )
}

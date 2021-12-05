import React, { useCallback, useState } from 'react'

import * as S from './CheckBox.styled'

type Props = {
  label: string
  defaultChecked?: boolean
  onChange?: (value: boolean) => void
}

export function CheckBox({ label, defaultChecked = false, onChange }: Props) {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleChange = useCallback(() => {
    setIsChecked((prevState) => {
      const newValue = !prevState

      onChange && onChange(newValue)

      return newValue
    })
  }, [onChange])

  return (
    <S.Container onPress={handleChange}>
      <S.Box isChecked={isChecked} />
      <S.LabelText>{label}</S.LabelText>
    </S.Container>
  )
}

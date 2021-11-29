import styled, { css } from 'styled-components/native'
import { theme } from '~/ui'

type BoxProps = {
  isChecked: boolean
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
`

export const Box = styled.View<BoxProps>`
  height: 20px;
  width: 20px;
  background: ${theme.colors.neutral[200]};

  ${({ isChecked }) =>
    isChecked &&
    css`
      border: 6px solid ${theme.colors.neutral[900]};
    `}
`

export const LabelText = styled.Text`
  font-family: ${theme.font.inter.regular};
  color: ${theme.colors.neutral[500]};
  margin-left: 12px;
  font-size: 14px;
`

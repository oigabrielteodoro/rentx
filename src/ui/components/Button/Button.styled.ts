import styled, { css } from 'styled-components/native'
import { theme } from '~/ui'

type ButtonProps = {
  variant: 'primary' | 'secondary'
}

const modifiers = {
  primary: css`
    background: ${theme.colors.red[500]};
  `,
  secondary: css`
    background: ${theme.colors.neutral[800]};
  `,
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  padding: 20px 0;
  align-items: center;
  ${({ variant }) => modifiers[variant]}
`

export const ButtonText = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.font.inter.medium};
`

import styled from 'styled-components/native'

import { theme } from '~/ui'

export const Container = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
`

export const IconArea = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.neutral[50]};
`

export const TextInput = styled.TextInput`
  flex: 1;
  height: 56px;
  margin-left: 3px;
  padding-left: 20px;
  background: ${theme.colors.neutral[50]};
`

export const SecureIcon = styled.View`
  position: absolute;
  right: 20px;
`

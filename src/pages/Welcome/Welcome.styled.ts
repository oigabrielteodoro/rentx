import styled from 'styled-components/native'

import { theme } from '~/ui'

export const Container = styled.View`
  background: ${theme.colors.neutral[900]};
  height: 100%;
`

export const Content = styled.SafeAreaView``

export const Logo = styled.Image`
  align-self: center;
  margin: 140px 0 120px;
`

export const Title = styled.Text`
  align-self: center;
  color: ${theme.colors.white};
  font-family: ${theme.font.archivo.medium};
  font-size: 35px;
  line-height: 43px;
`

export const Description = styled.Text`
  margin-top: 16px;
  align-self: center;
  color: ${theme.colors.neutral[300]};
  font-family: ${theme.font.inter.regular};
  font-size: 16px;
`

export const Row = styled.View`
  margin-top: 177px;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`

export const BackButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 40px;
`

export const BackButtonText = styled.Text`
  font-family: ${theme.font.archivo.medium};
  color: ${theme.colors.neutral[500]};
`

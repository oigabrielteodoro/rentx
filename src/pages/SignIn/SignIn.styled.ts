import styled from 'styled-components/native'
import { theme } from '~/ui'

export const Container = styled.KeyboardAvoidingView`
  background: ${theme.colors.white};
`

export const BackButton = styled.TouchableOpacity`
  margin: 20px 32px;
`

export const Title = styled.Text`
  color: ${theme.colors.neutral[900]};
  font-family: ${theme.font.archivo.semibold};
  margin-left: 32px;
  margin-top: 80px;
  font-size: 38px;
  max-width: 180px;
  line-height: 43px;
`

export const Description = styled.Text`
  margin-top: 24px;
  max-width: 204px;
  line-height: 25px;
  margin-left: 32px;
  color: ${theme.colors.neutral[700]};
  font-family: ${theme.font.inter.regular};
`

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 110px;
`

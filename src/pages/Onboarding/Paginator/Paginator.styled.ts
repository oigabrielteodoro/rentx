import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 45px;
`

export const Dot = styled(Animated.View)`
  height: 10px;
  margin: 0 8px;
  border-radius: 5px;
`

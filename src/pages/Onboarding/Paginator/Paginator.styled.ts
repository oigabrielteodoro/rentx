import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const Dot = styled(Animated.View)`
  height: 10px;
  border-radius: 5px;
  margin: 0 8px;
`

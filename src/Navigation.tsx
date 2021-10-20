import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboard, Welcome } from './pages'

const Stack = createNativeStackNavigator()

export function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName='Onboard'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboard' component={Onboard} />
      <Stack.Screen name='Welcome' component={Welcome} />
    </Stack.Navigator>
  )
}

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding, Welcome } from './pages'

const Stack = createNativeStackNavigator()

export function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName='Onboarding'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Welcome' component={Welcome} />
    </Stack.Navigator>
  )
}

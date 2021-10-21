import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding, Welcome } from './pages'

export type NavigatorProps = {
  Welcome: undefined
  Onboarding: undefined
}

const Stack = createNativeStackNavigator<NavigatorProps>()

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

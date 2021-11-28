import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding, Welcome, SignIn } from './pages'
import { ONBOARDING, SIGN_IN, WELCOME } from './routes'

export type NavigatorProps = {
  Welcome: undefined
  Onboarding: undefined
  SignIn: undefined
}

const Stack = createNativeStackNavigator<NavigatorProps>()

export function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={ONBOARDING}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ONBOARDING} component={Onboarding} />
      <Stack.Screen name={WELCOME} component={Welcome} />
      <Stack.Screen name={SIGN_IN} component={SignIn} />
    </Stack.Navigator>
  )
}

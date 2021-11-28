import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding, Welcome, SignIn, SignUp } from './pages'
import { ONBOARDING, SIGN_IN, SIGN_UP, WELCOME } from './routes'

export type NavigatorProps = {
  Welcome: undefined
  Onboarding: undefined
  SignIn: undefined
  SignUp: undefined
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
      <Stack.Screen name={SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  )
}

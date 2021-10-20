import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import { Navigation } from '~/Navigation'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Navigation />
    </NavigationContainer>
  )
}

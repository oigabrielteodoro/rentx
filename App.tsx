import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'

import { Navigation } from '~/Navigation'

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Navigation />
    </NavigationContainer>
  )
}

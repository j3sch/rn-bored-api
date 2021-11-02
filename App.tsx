import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'

const Stack = createNativeStackNavigator()

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Home />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Idea finder',
            headerStyle: {
              backgroundColor: '#122279',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

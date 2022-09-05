import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/app/LoginScreen'
import RegisterScreen from '../pages/app/RegisterScreen';

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function AuthStack() 
{
    return (
      //<RegisterScreen/>
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName='RegisterScreen'
            screenOptions={{
              headerShown: false
            }}
            style={{ backgroundColor: '#E42217' }}
          >
            <Stack.Screen
              name='Connexion'
              component={LoginScreen}
            />
            <Stack.Screen
              name='register'
              component={RegisterScreen}
            />
          </Stack.Navigator>
      </NavigationContainer>
    )
}
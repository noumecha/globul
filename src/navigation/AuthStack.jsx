import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from '../pages/app/WelcomeScreen'
import SignInScreen from '../pages/app/SignInScreen'
import SignOutScreen from '../pages/app/SignOutScreen'

const Tab = createMaterialBottomTabNavigator()

export default function AuthStack() 
{
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Welcome" 
                    component={WelcomeScreen} 
                    options={{
                        tabBarLabel: 'Welcome',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="home-flood" color={color} size={26} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="SignIn" 
                    component={SignInScreen} 
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="login" color={color} size={26} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="SignOut" 
                    component={SignOutScreen} 
                    options={{
                        tabBarLabel: 'Logout',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="logout" color={color} size={26} />
                        ),
                      }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
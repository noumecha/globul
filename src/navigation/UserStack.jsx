import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../pages/app/HomeScreen'
import SettingsScreen from '../pages/app/SettingsScreen';

const Tab = createMaterialBottomTabNavigator()

export default function UserStack() 
{
    return (
        <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Settings"
              activeColor="white"
              barStyle={{ backgroundColor: '#E42217' }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={SettingsScreen} 
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="account-settings" color={color} size={26} />
                        ),
                      }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
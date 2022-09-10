import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/app/HomeScreen';
import WelcomeScreen from '../pages/app/WelcomeScreen';
import DonateScreen from '../pages/app/DonateScreen';
import MapScreen from '../pages/app/MapScreen';
import SettingsScreen from '../pages/app/SettingsScreen';
import LoginScreen from '../pages/app/LoginScreen';
import RegisterScreen from '../pages/app/RegisterScreen';
// material ui icons 
//import Icon from 'react-native-ico-material-design';

const Tab = createMaterialBottomTabNavigator()

export default function MainStack()
{
    return (
      //<LoginScreen/>
      //<RegisterScreen/>
      //<MapScreen/>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="home"
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
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarLabel: 'Demandes',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="water-alert-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Donate"
            component={DonateScreen}
            options={{
              tabBarLabel: 'Dons',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="blood-bag" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarLabel: 'Voir',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="crosshairs" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Profil',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}
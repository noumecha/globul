import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native'
import HomeScreen from './HomeScreen'
import DetailsScreen from './Details';
import TestScreen from './TestScreen'
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

export default function AppTest() {
    return (
      <NavigationContainer>
        { Platform.OS === "android" && (
          <Tab.Navigator>
            <Tab.Screen
              name="Home" 
              component={HomeScreen}
            />
            <Tab.Screen
              name="Test" 
              component={TestScreen}
            />
            <Tab.Screen
              name="Login" 
              component={LoginScreen}
            />
            <Tab.Screen
              name="Details" 
              component={DetailsScreen}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    );
  }
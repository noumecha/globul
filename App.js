//import 'react-native-gesture-handler'
// the bellow Navigation Container help us to make navigations between screens in this project
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { StyleSheet } from 'react-native'
import HomeScreen from './src/pages/screens/HomeScreen';
import ProfileScreen from './src/pages/screens/ProfileScreen'
import LoginScreen from './src/pages/screens/LoginScreen'
import TestScreen from './src/pages/screens/tests/TestScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions = {{
          headerStyle: {
            backgroundColor: '#E42217'
          },
          headerTintColor: '#fff'
        }} 
        initialRouteName='Test'>
        <Stack.Screen 
          name="Test" 
          component={TestScreen}
          options = {{ title: 'TestPage' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options = {{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options = {{ title: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
})


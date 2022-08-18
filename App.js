//import 'react-native-gesture-handler'
// the bellow Navigation Container help us to make navigations between screens in this project
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet } from 'react-native'
import HomeScreen from './src/pages/screens/HomeScreen'
import LoginScreen from './src/pages/screens/LoginScreen'
import DetailsScreen from './src/pages/screens/tests/Details';
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
        initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options = {{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Test" 
          component={TestScreen}
          options = {{ title: 'TestPage' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options = {({route}) => ({
            headerRight: () => {
              return (
                <Button
                  title='Buy'
                  onPress={() =>{}}
                  disabled={route.params.stock === 0}
                />
              )
            }
          })}
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


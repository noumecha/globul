//import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { StyleSheet } from 'react-native'
import HomeScreen from './src/pages/screens/HomeScreen';
import ProfileScreen from './src/pages/screens/ProfileScreen'
import LoginScreen from './src/pages/screens/LoginScreen'

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
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options = {{
            headerRight: () => (
              <Icon
                name="plus"
                type="feather"
                color="#fff"
                style={style.headerIcon}
              />
            )
          }}
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


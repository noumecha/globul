import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, _View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from './src/pages/screens/HomeScreen';
//import ProfileScreen from './src/pages/screens/ProfileScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          <Text style={styles.txt}>Globul Project [by Noumecha Spaker]</Text>
          <StatusBar style="auto" />
        </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  }
});

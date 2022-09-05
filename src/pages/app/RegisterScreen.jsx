import react from 'react'
//import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import RegisterContainer from './RegisterContainer'
import RegisterStepOne from './RegisterStepOne'
import RegisterStepTwo from './RegisterStepTwo'
//import styles from '../../styles'

const Stack = createNativeStackNavigator()

export default function RegisterScreen() 
{
    return (
        //<NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor:'#E42217',
                            textAlign: 'center',
                            color: 'white',
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        title: 'Inscription : Etape 1/2',
                    }}
                    name='Etape 1/2'
                    component={RegisterStepOne}
                />
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor:'#E42217',
                            textAlign: 'center',
                            color: 'white',
                        },
                        headerTintColor: 'white',
                        title: 'Inscription Etape : 2/2',
                        headerTitleAlign: 'center',
                    }}
                    name='Etape 2/2'
                    component={RegisterStepTwo}
                />
            </Stack.Navigator>
        //</NavigationContainer>
    )
}
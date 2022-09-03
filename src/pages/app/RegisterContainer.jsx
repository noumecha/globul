import react from 'react'
//import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
//import Icons from 'react-native-vector-icons/FontAwesome5Pro'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View , Text } from 'react-native'
import PagerView from 'react-native-pager-view';
import styles from '../../styles'
import RegisterStepOne from './RegisterStepOne'
import RegisterStepTwo from './RegisterStepTwo'
import FooterComp from '../../components/FooterComp'

const Stack = createNativeStackNavigator()

export default function RegisterContainer() 
{
    return (

        <>
            <PagerView 
                style={styles.regForm} 
                initialPage={0}
                orientation={'horizontal'}
            >
                <View style={styles.page} key="1">
                    <RegisterStepOne

                    />
                </View>

                <View style={styles.page} key="3">
                    <RegisterStepTwo

                    />
                </View>
            </PagerView>
        </>
        /*<NavigationContainer>
            { Platform.OS === "android" && (
                <Stack.Navigator>
                    <Stack.Screen
                        name="step_one"
                        component={RegisterStepOne}                
                    />
                    <Stack.Screen
                        name="step_two"
                        component={RegisterStepTwo}                
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>*/
    )
}
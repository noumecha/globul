import React, { useContext } from 'react'
import styles from '../../styles'
import { View , Text } from 'react-native'
import CustButton from '../../components/CustButton'
import { AuthContext } from '../../components/context';

export default function SettingsScreen()
{

    const { signOut } = useContext(AuthContext)

    //const userEmail = takeEmail

    return (
        <View style={styles.container}>
            <Text>
                Email de l'user en cours : 
            </Text>
            <Text>
                Settings Screen
            </Text>
            <CustButton
                label="exit"
                onPress={() => {
                    signOut()
                }}
            />
        </View>
        
    )
}
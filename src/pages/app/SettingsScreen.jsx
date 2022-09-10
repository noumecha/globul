import React, { useContext,useState } from 'react'
import styles from '../../styles'
import { View , Text } from 'react-native'
import CustButton from '../../components/CustButton'
import FormInput from '../../components/FormInput'
import { AuthContext } from '../../components/context'
import { StatusBar } from 'expo-status-bar'

export default function SettingsScreen()
{

    const { signOut } = useContext(AuthContext)

    const [passwordVisible, setPasswordVisible] = useState(true);

    //const userEmail = takeEmail

    return (
        <View style={styles.container}>
            <StatusBar
                style='auto'
            />
            <Text style={styles.mapHeader}>
                Configurez votre profile
            </Text>
            <View style={styles.containerSetInput}>
                <FormInput
                    placeholder="changer l'adresse email"
                    //value={email}
                    //onChangeText={value => handleOnChangeText(value, 'email')}
                    iconName='mail'
                    keyboardType='email-address'
                />
                <FormInput
                    placeholder='Changez le mot passe'
                    //value={email}
                    //onChangeText={value => handleOnChangeText(value, 'email')}
                    iconName={passwordVisible ? "eye-off" : "eye"}
                    keyboardType='email-address'
                />
            </View>
            <CustButton
                label="Mettre à jour"
            />
            <CustButton
                label="exit"
                onPress={() => {
                    signOut()
                }}
            />
        </View>
        
    )
}
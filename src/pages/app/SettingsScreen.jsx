import React, { useContext,useState } from 'react'
import styles from '../../styles'
import { View , Text, Image } from 'react-native'
import CustButton from '../../components/CustButton'
import FormInput from '../../components/FormInput'
import { AuthContext,EmailContext, pwdContext } from '../../components/context'
import { StatusBar } from 'expo-status-bar'

export default function SettingsScreen()
{
    // authentication context
    const { signOut } = useContext(AuthContext)

    // data context
    const { userEmail } = useContext(EmailContext)
    const { pwd } = useContext(pwdContext)

    // handling passwords
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(true);

    return (
        <View style={styles.container}>
            <StatusBar
                style='auto'
            />
            <Text style={styles.mapHeader}>
                Configurez votre profile
            </Text>
            <View style={styles.arc_settings}>
                <Image
                    source={require('../../assets/user.png')}
                    style={styles.arc_logo}
                />
                <Text style={styles.text}>
                    utilisateur : {userEmail} 
                </Text>
                <Text style={styles.text}>
                    pwd : {pwd} 
                </Text>
            </View>
            <View style={styles.containerSetInput}>
                <FormInput
                    placeholder="changer l'adresse email"
                    //value={email}
                    //onChangeText={value => handleOnChangeText(value, 'email')}
                    iconName='mail'
                    keyboardType='email-address'
                />
                <FormInput
                    placeholder='changer le numero de telephone'
                    //value={contact}
                    //onChangeText={value => handleOnChangeText(value, 'contact')}
                    iconName='phone-hangup'
                    keyboardType='number-pad'
                />
                <FormInput
                    placeholder='changez le mot de passe'
                    //value={password}
                    onChangeText={value => handleOnChangeText(value, 'password')}
                    secureTextEntry={passwordVisible}
                    iconName={passwordVisible ? "eye-off" : "eye"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                />
                <FormInput
                    placeholder='Confirmer le mot de passse'
                    onChangeText={value => handleOnChangeText(value, 'passwordConfirm')}
                    //value={passwordConfirm}
                    secureTextEntry={passwordVisibleConfirm}
                    iconName={passwordVisibleConfirm ? "eye-off" : "eye"}
                    onPress={() => setPasswordVisibleConfirm(!passwordVisibleConfirm)}
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
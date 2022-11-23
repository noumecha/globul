import React, { useContext} from 'react'
import styles from '../../styles'
import { View , Text, Image } from 'react-native'
import CustButton from '../../components/CustButton'
import { EmailContext, AuthContext } from '../../components/context'
import { StatusBar } from 'expo-status-bar'

export default function WelcomeScreen()
{
    // data context
    const { userEmail } = useContext(EmailContext)
    // authentication context
    const { signOut } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <StatusBar
                style='auto'
            />
            <Text style={styles.mapHeader}>
                Creer une Demande
            </Text>
            <View style={styles.arc_settings}>
                <Image
                    source={require('../../assets/donneur.jpg')}
                    style={styles.arc_logo}
                />
                <Text style={styles.text}>
                    utilisateur : {userEmail} 
                </Text>
            </View>
            <CustButton
                label="creer une demande"
            />
            <View style={styles.containerSetInput}>
                <Text>
                    Aucune demande en cours "appuyer sur Creer une demande"
                    pour effectuer une demande de don
                </Text>
            </View>
            <CustButton
                label="exit"
                onPress={() => {
                    signOut()
                }}
            />
        </View>
    )
}
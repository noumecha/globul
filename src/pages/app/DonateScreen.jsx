import React, { useContext} from 'react'
import styles from '../../styles'
import { View , Text, Image } from 'react-native'
import CustButton from '../../components/CustButton'
import { EmailContext, AuthContext } from '../../components/context'
import { StatusBar } from 'expo-status-bar'

export default function DonateScreen()
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
                Creer un don
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
                    contact : todos.contact
                </Text>
            </View>
            <View style={styles.containerSetInput}>
                <Text>
                    donate content
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
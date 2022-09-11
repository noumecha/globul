import React, { useContext} from 'react'
import styles from '../../styles'
import { View , Text } from 'react-native'
import CustButton from '../../components/CustButton'
import { EmailContext, AuthContext } from '../../components/context'

export default function WelcomeScreen()
{
    // data context
    const { userEmail } = useContext(EmailContext)
    // authentication context
    const { signOut } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>
                Welcome Screen
            </Text>
            <Text>
                email: {userEmail}
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
import React, { useContext} from 'react'
import styles from '../../styles'
import { View , Text } from 'react-native'
import { DataContext } from '../../components/context'

export default function WelcomeScreen()
{
    // data context
    const { data } = useContext(DataContext)
    return (
        <View style={styles.container}>
            <Text>
                Welcome Screen
            </Text>
            <Text>
                {data.code}
            </Text>
        </View>
        
    )
}
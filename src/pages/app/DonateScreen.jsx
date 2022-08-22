import React from 'react'
import styles from '../../styles'
import { View , Text } from 'react-native'

export default function DonateScreen()
{
    return (
        <View style={styles.container}>
            <Text>
                Donate Screen
            </Text>
            <Text styles={styles.txt}>
                new donation
            </Text>
        </View>
        
    )
}
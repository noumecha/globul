import React from "react"
import { Text, View } from 'react-native'
import styles from './styles'
import Box from './Box'

export default function  DetailsScreen() 
{
    return (
        <View style={styles.container}>
            <Box>Details Screen</Box>
            <View style={styles.boxRound}>
                <Text style={styles.boxText}>Details</Text>
            </View>
        </View>
    )
}
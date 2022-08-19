import React from "react"
import CustButton from '../../../components/CustButton'
import { Text, View, Button } from 'react-native'
import styles from './styles'
import Box from './Box'

export default function  TestScreen() 
{
    return (
        <View style={styles.container}>
            <Box>page header</Box>
            <View style={styles.boxRound}>
                <Text style={styles.boxText}>Test Page Content</Text>
            </View>
            <CustButton>Test Screen</CustButton>    
            <Box>page footer</Box>
        </View>
    )
}
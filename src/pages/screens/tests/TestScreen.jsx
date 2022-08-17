import React from "react"
import CustButton from '../../../components/CustButton'
import { Text, View } from 'react-native'
import styles from './styles'
import Box from './Box'

const TestScreen = () =>
{
    return (
        <View style={styles.container}>
          <Box>Test Page Header</Box>
          <View style={styles.boxRound}>
            <Text style={styles.boxText}>Test Page Content</Text>
          </View>
          <CustButton/>
          <View style={styles.box}>
            <Text style={styles.boxText}>Test Page Footer</Text>
          </View>       
        </View>
    )
}

export default TestScreen;

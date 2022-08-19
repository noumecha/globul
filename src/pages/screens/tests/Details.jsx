import React from "react"
import CustButton from '../../../components/CustButton'
import { Text, View, Button } from 'react-native'
import styles from './styles'
import Box from './Box'

export default function  DetailsScreen({navigation,route}) 
{
    const {title} = route.params

    React.useLayoutEffect(() => {
        navigation.setOptions({title})
    }, [])

    return (
        <View style={styles.container}>
            <Box>Details Screen</Box>
            <View style={styles.boxRound}>
                <Text style={styles.boxText}>{title}</Text>
            </View>
            <Text>{content}</Text>
        </View>
    )
}
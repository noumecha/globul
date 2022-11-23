import React from "react"
import styles from "../styles"
import { View, Text, Image } from 'react-native'

const  renderSlide = ({item}) => 
{

    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.title} hello slider</Text>
        </View>
    ) 
}

export { renderSlide }
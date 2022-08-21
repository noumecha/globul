import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles';

export default function CustButton({children}){

    return (
      <View>
        <Text style={styles.txt}> {children} </Text>
        <StatusBar style="auto" />
      </View>
    )
}

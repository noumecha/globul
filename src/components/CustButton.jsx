import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'

export default function CustButton({children}){

    return (
      <View>
        <Text style={styles.txt}> {children} </Text>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    txt: {
      backgroundColor: '#E42217',
      color: '#fff',
      fontSize: 16,
      marginTop: 10,
      padding: 10,
      borderRadius: 20,
    }
});
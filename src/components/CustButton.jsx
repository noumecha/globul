import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'

const CustButton = () => {

    return (
        <View>
            <Text style={styles.txt}> My Button </Text>
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
export default CustButton;
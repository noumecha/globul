import React from "react"
import { StatusBar } from 'expo-status-bar';
import CustButton from '../../components/CustButton'
import { Button, StyleSheet, View, Text } from "react-native"

const LoginScreen = () =>
{
    return (
        <View style={styles.logScreen}>
            <Text>Login Page</Text>
            <Button 
            title="Go to other Page"
            />
            <CustButton />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    logScreen: {
      top: 0,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt: {
      backgroundColor: '#E42217',
      color: '#fff',
      fontSize: 16,
      marginTop: 10,
      padding: 10,
      borderRadius: 20,
    }
  });
import React from "react"
import { StatusBar } from 'expo-status-bar';
import CustButton from '../../components/CustButton'
import { Button, View, Text } from "react-native"
import styles from "./tests/styles";
import Box from "./tests/Box"

export default function LoginScreen({navigation})
{
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Box>Login Page</Box>
            <CustButton>Login Screen</CustButton>
        </View>
    )
}
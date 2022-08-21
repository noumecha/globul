import React from "react"
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from "react-native"
import styles from "./styles";
import Box from "./Box"

export default function LoginScreen()
{
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Box>Login Page</Box>
            <Button
                title="Login"
            />
        </View>
    )
}
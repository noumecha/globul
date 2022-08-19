import React from "react";
import CustButton from '../../components/CustButton'
import { Button, Text, View } from 'react-native';
import styles from "./tests/styles";
import Box from "./tests/Box";

export default function  HomeScreen({navigation})
{
    return (
      <View style={styles.container}>
        <Box>Home Page</Box>       
        <CustButton>Home</CustButton>
        <Button
          title="test"
          onPress={() => navigation.navigate('Test')}
        />
        <Button 
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    )
}
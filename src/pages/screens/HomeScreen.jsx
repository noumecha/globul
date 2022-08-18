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
          <Button 
            title="Details 1"
            onPress={() => navigation.navigate('Details', {title: "item 1"})}
          />
          <Button 
            title="Details 2"
            onPress={() => navigation.navigate('Details', {title: "item 2"})}
          />
        </View>
    )
}
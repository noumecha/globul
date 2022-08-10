import React from "react";
import { StatusBar } from 'expo-status-bar';
import CustButton from '../../components/CustButton'
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () =>
{
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Button 
            title="Go to profile page"
            />        
            <CustButton/>
        </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

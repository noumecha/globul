import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () =>
{
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Button 
            title="Go to profile page"
            />        
            <View>
                <Text style={styles.txt}>Globul Project [tmc]</Text>
                <StatusBar style="auto" />
            </View>
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
  txt: {
    backgroundColor: '#E42217',
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  }
});

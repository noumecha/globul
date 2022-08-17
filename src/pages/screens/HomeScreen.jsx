import React from "react";
import { StatusBar } from 'expo-status-bar';
import CustButton from '../../components/CustButton'
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () =>
{
    return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Home Page</Text>
          </View>       
          <CustButton/>
        </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
    ...Platform.select({
        ios: { paddingTop: 20 },
        android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

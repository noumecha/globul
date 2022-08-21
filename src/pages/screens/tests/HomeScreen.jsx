import React from "react"
import { Button, Text, View } from 'react-native'
import ListContainer from './ListContainer'
import styles from "./styles"

export default function  HomeScreen({navigation})
{
    return (
      <View style={styles.container}>      
        <ListContainer/>
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
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheetimport, TouchableOpacity, Text, View } from 'react-native'
import styles from '../styles'

export default function CustButton({label, onPress}){

    return (
      <TouchableOpacity
        style={styles.txtBtn}
        onPress={onPress}
      >
        <Text 
          style={styles.reg_txt}
        >
          {label} 
        </Text>
      </TouchableOpacity>
    )
}
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheetimport, TouchableOpacity, Text, View } from 'react-native'
import styles from '../styles'

export default function SquareButton({label, onPress}){

    return (
      <TouchableOpacity
        style={styles.txtBtnSquare}
        onPress={onPress}
      >
        <Text 
          style={styles.reg_txtSquare}
        >
          {label} 
        </Text>
      </TouchableOpacity>
    )
}
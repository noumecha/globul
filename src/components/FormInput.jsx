import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, View } from 'react-native';
import styles from '../styles'

export default function FormInput (props) 
{

    const { placeholder, iconName, keyboardType, onPress } = props

    return(
        <View style={{ marginTop: 5 }}>
           <TextInput
               placeholder={placeholder}
               {...props}
               //value
               //onChangeText={}
               placeholderTextColor={'#E42217'}
               style={styles.txtInput}
               keyboardType={keyboardType}
           />
           <MaterialCommunityIcons 
                name={iconName} 
                style={styles.inputIcon} 
                color='#E42217' 
                onPress={onPress} 
                size={26}
            />
        </View>
    )
}
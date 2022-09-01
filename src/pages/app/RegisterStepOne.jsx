
import react from 'react'
import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../styles';

export default function RegisterStepOne () {
    return (
        <View style={styles.regForm}>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='nom'
                    placeholderTextColor={'#E42217'} 
                    style={styles.txtInput}
                    keyboardType="text"
                />
                <MaterialCommunityIcons name="verified-user" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='prenom'
                    placeholderTextColor={'#E42217'}
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='email'
                    placeholderTextColor={'#E42217'}
                    keyboardType='email-address'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='age'
                    placeholderTextColor={'#E42217'}
                    keyboardType='numeric'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5}}>
                <TextInput
                    placeholder='sexe (M ou F)'
                    placeholderTextColor={'#E42217'}
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
        </View>
    )
}
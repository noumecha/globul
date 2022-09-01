import react from 'react'
import { Text, View, ImageBackground, TextInput, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../styles';
import CustButton from '../../components/CustButton';


export default function RegisterStepTwo() 
{
    return (
        <View style={styles.regForm}>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='contact'
                        placeholderTextColor={'#E42217'}
                        keyboardType='number-pad'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='Groupe sanguin'
                        placeholderTextColor={'#E42217'}
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='ville'
                        placeholderTextColor={'#E42217'}
                        keyboardType='default'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='mot de passe'
                        placeholderTextColor={'#E42217'}
                        //secureTextEntry={true}
                        keyboardType='visible-password'
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <View style={{ marginTop: 5}}>
                    <TextInput
                        placeholder='confirmer le mot de passe'
                        placeholderTextColor={'#E42217'}
                        secureTextEntry={true}
                        style={styles.txtInput}
                    />
                    <MaterialCommunityIcons name="form-textbox-password" style={styles.inputIcon} color='#E42217' size={26} />
                </View>
                <CustButton
                    style={styles.txtBtn}
                    label="creer"
                />
        </View>
    )
}
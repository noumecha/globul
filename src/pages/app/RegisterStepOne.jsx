
import react, { useState } from 'react'
import { View, TextInput, Image, Picker } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
//import { Form, FormItem, Picker,  } from 'react-native-form-component'
import CustButton from '../../components/CustButton'


export default function RegisterStepOne({ navigation }) {

    return (
        <View style={styles.regForm}>
            <View style={styles.arc}>
                <Image
                    source={require('../../assets/donor.png')}
                    style={styles.arc_logo}
                />
            </View>
            <View style={{ marginTop: 5 }}>
                <TextInput
                    placeholder='Nom'
                    placeholderTextColor={'#E42217'}
                    style={styles.txtInput}
                    keyboardType="text"
                />
                <MaterialCommunityIcons name="account-circle" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5 }}>
                <TextInput
                    placeholder='Prenom'
                    placeholderTextColor={'#E42217'}
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="account" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5 }}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'#E42217'}
                    keyboardType='email-address'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="at" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5 }}>
                <TextInput
                    placeholder='Age(> 17)'
                    placeholderTextColor={'#E42217'}
                    keyboardType='numeric'
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="language-lua" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <View style={{ marginTop: 5 }}>
                <TextInput
                    placeholder='Sexe (M ou F)'
                    placeholderTextColor={'#E42217'}
                    style={styles.txtInput}
                />
                <MaterialCommunityIcons name="human-non-binary" style={styles.inputIcon} color='#E42217' size={26} />
            </View>
            <CustButton
                label="suivant"
                onPress={() => navigation.navigate('Etape 2/2')}
            />
        </View>
    )
}
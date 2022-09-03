
import react, { useState } from 'react'
import { View, TextInput, Image, Picker } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
//import { Form, FormItem, Picker,  } from 'react-native-form-component'
import CustButton from '../../components/CustButton'
import FormInput from '../../components/FormInput'


export default function RegisterStepOne({ navigation }) {

    return (
        <View style={styles.regForm}>
            <View style={styles.arc}>
                <Image
                    source={require('../../assets/donor.png')}
                    style={styles.arc_logo}
                />
            </View>
            <FormInput
                placeholder='Nom'
                iconName='account-circle'
                keyboardType='text'
            />
            <FormInput
                placeholder='Prenom'
                iconName='account'
                keyboardType='text'
            />
            <FormInput
                placeholder='Email'
                iconName='at'
                keyboardType='email-address'
            />
            <FormInput
                placeholder='Age(> 17)'
                iconName='language-lua'
                keyboardType='numeric'
            />
            <FormInput
                placeholder='Sexe (M ou F)'
                placeholderTextColor={'#E42217'}
                iconName='human-non-binary'
            />
            <CustButton
                label="suivant"
                onPress={() => navigation.navigate('Etape 2/2')}
            />
        </View>
    )
}
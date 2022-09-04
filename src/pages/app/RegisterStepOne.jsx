
import react, { useState } from 'react'
import { View, TextInput, Text, Image, Picker } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles';
//import { Form, FormItem, Picker,  } from 'react-native-form-component'
import CustButton from '../../components/CustButton'
import FormInput from '../../components/FormInput'


export default function RegisterStepOne({ navigation }) {

    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim()) 
    }

    const updateError = (errorOne, stateUpdater) => {
        stateUpdater(errorOne)
        setTimeout(() => {
            stateUpdater('')
        }, 3000)
    }

    const isValidEmail = (value) => {
        const regx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return regx.test(value)
    }
    const [userInfo, setUserInfo] = useState({
        nom: '',
        prenom: '',
        email: '',
        age:'',
        sexe: '',
    })

    const [errorOne, setErrorOne] = useState('')
    
    const { nom, prenom, email, age, sexe} = userInfo

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value })
    }

    const isValidForm = () => {
        // all field have value
        if(!isValidObjField(userInfo)) return updateError('tout les champs sont requis', setErrorOne)
        // if name is not valid
        if(!nom.trim() || nom.length < 3 ) return updateError('le nom n\'est pas valide', setErrorOne)
        // if surname is not valid
        if(!prenom.trim() || nom.length < 3 ) return updateError('le prenom n\'est pas valide', setErrorOne)
        // if email is not valid 
        if(!isValidEmail(email)) return updateError('L\'email n\'est pas valide', setErrorOne)
        // password validation 
        if(!age.trim() || age.length > 2) return updateError('l\'age n\'est pas valide', setErrorOne)
        // password confirm 
        if(!sexe.trim() || sexe.length > 1 ) return updateError('le sexe doit juste etre une lettre (M ou F)', setErrorOne)

        return true
    }

    const testFormOne = () => {
        if(isValidForm()){
            // submit form 
            console.log(userInfo)
        }
    }

    return (
        <View style={styles.regForm}>
            <View style={styles.arc}>
                <Image
                    source={require('../../assets/donor.png')}
                    style={styles.arc_logo}
                />
            </View>
            { errorOne ? <Text style={{ textAlign: 'center', color: '#000' }}> {errorOne} </Text> : null }
            <FormInput
                placeholder='Nom'
                value={nom}
                onChangeText={value => handleOnChangeText(value, 'nom')}
                iconName='account-circle'
                keyboardType='text'
            />
            <FormInput
                placeholder='Prenom'
                value={prenom}
                onChangeText={value => handleOnChangeText(value, 'prenom')}
                iconName='account'
                keyboardType='text'
            />
            <FormInput
                placeholder='Email'
                value={email}
                onChangeText={value => handleOnChangeText(value, 'email')}
                iconName='at'
                keyboardType='email-address'
            />
            <FormInput
                placeholder='Age(> 17)'
                value={age}
                onChangeText={value => handleOnChangeText(value, 'age')}
                iconName='language-lua'
                keyboardType='numeric'
            />
            <FormInput
                placeholder='Sexe (M ou F)'
                value={sexe}
                onChangeText={value => handleOnChangeText(value, 'sexe')}
                placeholderTextColor={'#E42217'}
                iconName='human-non-binary'
            />
            <CustButton
                label="suivant"
                //onPress={() => navigation.navigate('Etape 2/2')}
                onPress={() => { //validate()
                    testFormOne()
                    //else {alert("noumel")}
                    /*if (isValidForm()) { navigation.navigate('Etape 2/2') /*}*/
                }}
            />
        </View>
    )
}
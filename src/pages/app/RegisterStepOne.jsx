
import react, { useState } from 'react'
import { View, Image } from 'react-native'
import ErrorMessage from '../../components/ErrorMessage'
import { doc, setDoc, addDoc, collection } from 'firebase/firestore'
import { db } from '../../../config'
import { PropTypes } from 'prop-types'
import styles from '../../styles';
import CustButton from '../../components/CustButton'
import FormInput from '../../components/FormInput'


export default function RegisterStepOne({ navigation }) {
    // for catching errors in inputForm Component
    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim()) 
    }

    // for updateError and show the error
    const updateError = (errorOne, stateUpdater) => {
        stateUpdater(errorOne)
        setTimeout(() => {
            stateUpdater('')
        }, 3000)
    }

    // for validating the email address
    const isValidEmail = (value) => {
        const regx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return regx.test(value)
    }

    // state for the user info
    const [userInfo, setUserInfo] = useState({
        nom: '',
        prenom: '',
        email: '',
        age:'',
        sexe: '',
    })

    // state for the error to show
    const [errorOne, setErrorOne] = useState('')
    
    // the userInfo keys 
    const { nom, prenom, email, age, sexe} = userInfo

    // for handling inputForm values
    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value })
    }

    // for create new object in the db
    function create () {
        console.log(userInfo)
        /*addDoc(collection(db, 'users'), {
            userInfo : toString(username),
            email: toString(email)
        }).then(() => {
            // data save successfully
            console.log('data submitted successfully')
        }).catch((error) => {
            console.log(error)
        })*/
    }

    // for the form validation
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

    // just a test function
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
            { errorOne ? <ErrorMessage error={errorOne} visible={true}/> : null }
            <FormInput
                placeholder='Nom'
                value={nom}
                onChangeText={value => handleOnChangeText(value, 'nom')}
                iconName='account-circle'
                keyboardType='default'
            />
            <FormInput
                placeholder='Prenom'
                value={prenom}
                onChangeText={value => handleOnChangeText(value, 'prenom')}
                iconName='account'
                keyboardType='default'
            />
            <FormInput
                placeholder='Email'
                value={email}
                onChangeText={value => handleOnChangeText(value, 'email')}
                iconName='mail'
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
                onPress={() => { //validate()
                    //testFormOne()
                    //else {alert("noumel")}
                    /*if (isValidForm()) {* navigation.navigate('Etape 2/2', {
                        donor: userInfo.nom,
                    }) /*}*/
                    isValidForm()
                    ? navigation.navigate('Etape 2/2', {
                        donor: userInfo.nom
                    })
                    : console.log("error occured on the first step form")
                    //create()
                }}
            />
        </View>
    )
}

RegisterStepOne.propTypes = {
    nom : PropTypes.string.isRequired,
    prenom : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sexe: PropTypes.string.isRequired,
}